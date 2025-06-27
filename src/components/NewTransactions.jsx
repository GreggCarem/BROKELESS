import "../style/new-transaction.scss";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../config/firebase";
import { getCurrentUserData } from "../utils/getUserData";

export default function NewTransactions({ onSubmit }) {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [label, SetLabel] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "expense"), {
        type,
        price: parseFloat(price),
        label,
        createdAt: new Date(),
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
      });
      console.log("Expense added with ID:", docRef.id);
    } catch (err) {
      console.error("Error adding expense:", err);
    }

    onSubmit();
  };
  function handleTransactionType(e) {
    setType(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }
  function handleLabel(e) {
    SetLabel(e.target.value);
  }
  // Custom Categories

  useEffect(() => {
    const loadUserData = async () => {
      const data = await getCurrentUserData();
      if (data) {
        setUserData(data);
      }
    };
    loadUserData();
  }, []);
  const categoriesArray = userData?.categories?.split(",") || [];

  return (
    <div className="transaction ">
      <h1 className="transaction-tittle">NEW TRANSACTION</h1>
      <form className="transaction-form" action="" onSubmit={handleSubmit}>
        <div className="transaction-field-1">
          <button
            className={`transaction-field-btn ${
              type === "expense" ? "active" : ""
            }`}
            type="button"
            onClick={() => setType("expense")}
            onChange={handleTransactionType}
          >
            Expense
          </button>

          <button
            className={`transaction-field-btn ${
              type === "income" ? "active" : ""
            }`}
            type="button"
            onClick={() => setType("income")}
            onChange={handleTransactionType}
          >
            Income
          </button>
        </div>
        <div className="transaction-field">
          <h3 className="transaction-field-text">PRICE</h3>
          <input
            value={price}
            onChange={handlePrice}
            className="transaction-field-input"
            name="amount"
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
            name="label"
            type="text"
            value={label}
            onChange={handleLabel}
          />
          <datalist id="category-options">
            {categoriesArray.map((category) => (
              <option key={category} value={category} />
            ))}
          </datalist>
        </div>
        <button className="transaction-field-btn-submit" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
