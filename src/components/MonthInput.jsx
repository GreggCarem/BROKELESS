import { useState } from "react";
import "../style/month-input.scss";

export default function MonthInput({ onSalaryChange }) {
  const [monthlySalary, setMonthlySalary] = useState("");

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setMonthlySalary(value);
    onSalaryChange(value);
  };

  return (
    <input
      className="month-input"
      type="number"
      name="Month"
      value={monthlySalary}
      onChange={handleChange}
    />
  );
}
