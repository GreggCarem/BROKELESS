import "../style/new-transaction.scss";
import { useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getCurrentUserData } from "../utils/getUserData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewTransactions({ onSubmit }) {
  const [type, setType] = useState("income");
  const [selectedType, setSelectedType] = useState("");
  const [price, setPrice] = useState("");
  const [label, SetLabel] = useState("");
  const [userData, setUserData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTransactionType = (newType) => {
    setType(newType);
    if (newType !== "expense") {
      setSelectedType("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!type) {
      toast.error("Please select a transaction type.");
      return;
    }

    if (type === "expense" && !selectedType) {
      toast.error("Please select Wants or Needs.");
      return;
    }

    if (!price || parseFloat(price) <= 0) {
      toast.error("Please enter a valid price.");
      return;
    }

    if (!label.trim()) {
      toast.error("Please enter a label.");
      return;
    }
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "expense"), {
        type,
        selectedType: type === "expense" ? selectedType : "",
        price: parseFloat(price),
        label,
        createdAt: new Date(),
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
      });
      toast.success("Transaction added successfully!");

      // Reset form
      setType("");
      setSelectedType("");
      setPrice("");
      SetLabel("");

      onSubmit();
    } catch (err) {
      toast.success("Error adding expense:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const categoriesArray = userData?.categories?.split(",") || [];

  useEffect(() => {
    const loadUserData = async () => {
      const data = await getCurrentUserData();
      if (data) setUserData(data);
    };
    loadUserData();
  }, []);

  return (
    <div className="transaction">
      <h1 className="transaction-tittle">NEW TRANSACTION</h1>
      <form className="transaction-form" onSubmit={handleSubmit}>
        <div className="transaction-field-1">
          <button
            className={`transaction-field-btn ${
              type === "expense" ? "active" : ""
            }`}
            type="button"
            onClick={() => handleTransactionType("expense")}
          >
            EXPENSE
          </button>
          <button
            className={`transaction-field-btn ${
              type === "income" ? "active" : ""
            }`}
            type="button"
            onClick={() => handleTransactionType("income")}
          >
            INCOME
          </button>
        </div>

        {type === "expense" && (
          <div className="transaction-field-2">
            <button
              className={`transaction-field-btn ${
                selectedType === "wants" ? "active" : ""
              }`}
              type="button"
              onClick={() => setSelectedType("wants")}
            >
              WANTS
            </button>
            <button
              className={`transaction-field-btn ${
                selectedType === "needs" ? "active" : ""
              }`}
              type="button"
              onClick={() => setSelectedType("needs")}
            >
              NEEDS
            </button>
          </div>
        )}

        <div className="transaction-field">
          <h3 className="transaction-field-text">PRICE</h3>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="transaction-field-input"
            type="number"
            min={0}
            step={1}
          />
        </div>

        <div className="transaction-field">
          <h3 className="transaction-field-text">LABEL</h3>
          <input
            list="category-options"
            className="transaction-field-input"
            type="text"
            value={label}
            onChange={(e) => SetLabel(e.target.value)}
          />
          <datalist id="category-options">
            {categoriesArray.map((category) => (
              <option key={category} value={category} />
            ))}
          </datalist>
        </div>
        <ToastContainer position="top-right" />
        <button
          className="transaction-field-btn-submit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}
