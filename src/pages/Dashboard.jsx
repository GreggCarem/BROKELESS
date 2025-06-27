import { useState, useEffect } from "react";
import NewTransactions from "../components/NewTransactions";
import "../style/dashboard.scss";
import TransactionList from "../components/TransactionList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import MonthInput from "../components/MonthInput";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { getCurrentUserData } from "../utils/getUserData";

export default function Dashboard() {
  const [elementVisible, setElementVisible] = useState(false);
  const [monthInputVisibility, setmonthInputVisibility] = useState(false);
  const [salary, setSalary] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const { currentUser } = useAuth();
  

  const fetchExpenses = async () => {
    if (!currentUser) return;
    const q = query(
      collection(db, "expense"),
      where("uid", "==", currentUser.uid)
    );
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setTransactions(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, [currentUser]);

  const monthlySalary = async () => {
    if (!currentUser) return;
    const q = query(
      collection(db, "monthly_salary"),
      where("uid", "==", currentUser.uid)
    );
    const snapshot = await getDocs(q);
    const monthly_salary_data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setSalary(monthly_salary_data);
  };

  useEffect(() => {
    monthlySalary();
  }, [currentUser]);

  const latestSalaryEntry = salary
    .filter((tx) => tx.uid === currentUser.uid)
    .sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis())[0];

  const latestMonthlySalary = latestSalaryEntry?.monthlySalary || 0;

  const incomeTransactions = transactions.filter(
    (tx) => tx.type === "income" && tx.price !== undefined
  );
  const expenseTransactions = transactions.filter(
    (tx) => tx.type === "expense" && tx.price !== undefined
  );

  const totalIncome = incomeTransactions.reduce((acc, tx) => acc + tx.price, 0);
  const totalExpense = expenseTransactions.reduce(
    (acc, tx) => acc + tx.price,
    0
  );
  const balance = totalIncome - totalExpense;

  // Calculate balance, needs, wants, and savings
  const monthlyIncome = latestMonthlySalary;

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

  function handleSettings() {
    navigate("/settings");
  }

  // Custom Categories
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


  // Clock
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
 

  return (
    <div className="dashboard-container">
      <nav className="nav-bar">
        <div className="nav-bar-left">
          <h1 className="nav-bar-tittle">BROKLESS</h1>
        </div>
        <h1>{ctime}</h1>

        <div className="nav-bar-right">
          <button
            varient="link"
            className="nav-bar-settings"
            onClick={handleSettings}
          >
            {!userData?.image ? (
              <FontAwesomeIcon
                className="nav-bar-settings-icon"
                icon={faGear}
              />
            ) : (
              userData.image && (
                <img
                  className="nav-bar-settings-icon"
                  src={userData.image}
                  alt={`${userData.name}'s profile`}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "auto",
                  }}
                />
              )
            )}
          </button>
          <button
            variant="link"
            onClick={handleLogout}
            className="nav-bar-logout"
          >
            LOG OUT{" "}
          </button>
        </div>
      </nav>
      <div className="main-info">
        <div className="main-info-row">
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
            <progress max={monthlyIncome} value={needs}></progress>
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
            {elementVisible ? (
              <NewTransactions
                onSubmit={() => {
                  fetchExpenses();
                  setElementVisible(false);
                }}
              />
            ) : null}
          </div>
        </div>
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}
