import { useState } from "react";
import NewTransactions from "../components/NewTransactions";
import "../style/dashboard.scss";
import TransactionList from "../components/TransactionList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import MonthInput from "../components/MonthInput";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [elementVisible, setElementVisible] = useState(false);
  const [monthInputVisibility, setmonthInputVisibility] = useState(false);
  const [salary, setSalary] = useState();

  const sampleTransactions = [
    {
      type: "expense",
      label: "Groceries",
      amount: 45.5,
      createdAt: new Date("2024-06-12T10:00:00").getTime(),
    },
    {
      type: "income",
      label: "Freelance",
      amount: 400,
      createdAt: new Date("2024-06-13T14:30:00").getTime(),
    },
    {
      type: "expense",
      label: "Bar",
      amount: 60,
      createdAt: new Date("2024-06-14T21:00:00").getTime(),
    },
    {
      type: "income",
      label: "Gift",
      amount: 100,
      createdAt: new Date("2024-06-15T08:45:00").getTime(),
    },
  ];

  // Filter transactions by type and calculate totals
  const incomeTransactions = sampleTransactions.filter(
    (tx) => tx.type === "income"
  );
  const expenseTransactions = sampleTransactions.filter(
    (tx) => tx.type === "expense"
  );

  const totalIncome = incomeTransactions.reduce(
    (acc, tx) => acc + tx.amount,
    0
  );
  const totalExpense = expenseTransactions.reduce(
    (acc, tx) => acc + tx.amount,
    0
  );
  const balance = totalIncome - totalExpense;

  // Calculate balance, needs, wants, and savings
  const monthlyIncome = salary;

  const needs = monthlyIncome * 0.5;
  const wants = monthlyIncome * 0.3;
  const savings = monthlyIncome * 0.2;

  const { logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Log Out
  async function handleLogout() {
    setError("");

    try {
      await logout();

      navigate("/");
    } catch {
      setError("FAILED TO LOGOUT");
    }
  }

  return (
    <div className="dashboard-container">
      <nav className="nav-bar">
        <h1 className="nav-bar-tittle">BROKLESS</h1>
        <button
          variant="link"
          onClick={handleLogout}
          className="nav-bar-logout"
        >
          LOG OUT{" "}
        </button>
      </nav>
      <div className="main-info">
        <div className="main-info-row">
          {/* <h2>Welcome:</h2>
          {currentUser.email} */}
          <div className="main-info-column">
            <h2 className="main-info-tittle">INCOME </h2>
            <h2 className="main-info-subtitle">{totalIncome} EUR </h2>
          </div>
          <div className="main-info-column">
            <h2 className="main-info-tittle">BALANCE </h2>
            <h2 className="main-info-subtitle">{balance} EUR </h2>
          </div>
          <div className="main-info-column">
            <h2 className="main-info-tittle">EXPENSE </h2>
            <h2 className="main-info-subtitle">{totalExpense} EUR </h2>
          </div>
        </div>
        <div className="main-info-month-box">
          <h2 className="main-info-month-tittle">THIS MONTH</h2>
          <button
            className="main-info-month-btn"
            onClick={() => setmonthInputVisibility(!monthInputVisibility)}
          >
            <FontAwesomeIcon className="main-info-month-icon" icon={faGear} />
          </button>
        </div>
        <div className="main-info-month-box-2">
          {monthInputVisibility ? (
            <MonthInput onSalaryChange={setSalary} className="monthly-input" />
          ) : null}
        </div>
        <div className="main-info-row ">
          <div className="main-info-column">
            <h2 className="main-info-tittle">WANTS </h2>
            <h2 className="main-info-subtitle">{wants} EUR </h2>
          </div>
          <div className="main-info-column">
            <h2 className="main-info-tittle">NEEDS </h2>
            <h2 className="main-info-subtitle">{needs} EUR </h2>
          </div>
          <div className="main-info-column">
            <h2 className="main-info-tittle">SAVINGS</h2>
            <h2 className="main-info-subtitle">{savings} EUR </h2>
          </div>
        </div>
      </div>
      <div className="spendings">
        <div className="spendings-header">
          <button className="spendings-header-add-container-space">+</button>

          <h2 className="spendings-header-tittle">SPENDINGS</h2>
          <div className="spendings-header-add-container">
            <button
              className="spendings-header-add"
              onClick={() => setElementVisible(!elementVisible)}
            >
              +
            </button>
            {elementVisible ? <NewTransactions /> : null}
          </div>
        </div>
        <TransactionList transactions={sampleTransactions} />
      </div>
    </div>
  );
}
