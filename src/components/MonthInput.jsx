import { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth } from "../config/firebase";
import "../style/month-input.scss";

export default function MonthInput({ onSalaryChange }) {
  const [monthlySalary, setMonthlySalary] = useState("");

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setMonthlySalary(value);
  };

  const handleBlur = async () => {
    if (!monthlySalary || isNaN(monthlySalary)) return;

    const newSalary = {
      monthlySalary: Number(monthlySalary),
      createdAt: Timestamp.now(),
      uid: auth.currentUser.uid,
      email: auth.currentUser.email,
    };

    try {
      const docRef = await addDoc(collection(db, "monthly_salary"), {
        monthlySalary: Number(monthlySalary),
        createdAt: Timestamp.now(),
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
      });
      console.log("Monthly Salary added:", docRef.id);
      if (onSalaryChange) {
        onSalaryChange((prev) => [...prev, newSalary]);
      }
    } catch (err) {
      console.error("Error adding Monthly Salary:", err);
    }
  };

  return (
    <input
      className="month-input"
      type="number"
      name="Month"
      value={monthlySalary}
      onChange={handleInputChange}
      onBlur={handleBlur}
      min={0}
    />
  );
}
