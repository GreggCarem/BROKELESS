import "../style/new-transaction.scss";
import { useState } from "react";

export default function NewTransactions() {
  const [type, setType] = useState("expense");
  return (
    <div className="transaction ">
      <h1 className="transaction-tittle">NEW TRANSACTION</h1>
      <form className="transaction-form" action="">
        <div className="transaction-field-1">
          <button
            className={`transaction-field-btn ${
              type === "expense" ? "active" : ""
            }`}
            type="button"
            onClick={() => setType("expense")}
          >
            Expense
          </button>

          <button
            className={`transaction-field-btn ${
              type === "income" ? "active" : ""
            }`}
            type="button"
            onClick={() => setType("income")}
          >
            Income
          </button>
        </div>
        <div className="transaction-field">
          <h3 className="transaction-field-text">PRICE</h3>
          <input
            className="transaction-field-input"
            name="amount"
            type="number"
            min={0}
            step={1}
          />
        </div>
        <div className="transaction-field">
          <h3 className="transaction-field-text">LABEL</h3>
          <input className="transaction-field-input" name="label" type="text" />
        </div>
        <button className="transaction-field-btn-submit" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
