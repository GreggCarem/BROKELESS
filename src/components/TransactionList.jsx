import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { collection, getDocs, where, query } from "firebase/firestore";
import { getCurrentUserData } from "../utils/getUserData";
import { db } from "../config/firebase";
import "../style/transaction-list.scss";

export default function TransactionList({ transactions }) {
  const [expenses, setExpenses] = useState([]);

  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchExpenses = async () => {
      if (!currentUser) return;

      try {
        const q = query(
          collection(db, "expense"),
          where("uid", "==", currentUser.uid)
        );

        const querySnapshot = await getDocs(q);

        const expenseData = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            ...data,
          };
        });

        setExpenses(expenseData);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, [currentUser]);

  // Custom Currency
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const loadUserData = async () => {
      const data = await getCurrentUserData();
      if (data) {
        setUserData(data);
      }
    };
    loadUserData();
  }, []);

  let currencyIcon = "";

  if (userData?.currency === "EUR") {
    currencyIcon = "€";
  } else if (userData?.currency === "USD") {
    currencyIcon = "$";
  } else if (userData?.currency === "GBP") {
    currencyIcon = "£";
  }

  return (
    <div className="transaction-list">
      <h2 className="transaction-list-title">Your Transactions</h2>
      {expenses.length === 0 ? (
        <p className="transaction-list-title">No transactions found.</p>
      ) : (
        <ul className="transaction-list-items">
          {transactions.map((expense) => (
            <li key={expense.id} className={`transaction-item ${expense.type}`}>
              <span className="transaction-type">
                {expense.type.toUpperCase()}
              </span>
              <span className="transaction-label">{expense.label}</span>
              <span className="transaction-amount">
                {expense.type === "expense" ? "-" : "+"} {currencyIcon}
                {expense.price}
              </span>
              <span className="transaction-date">
                {expense.createdAt?.toDate().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
