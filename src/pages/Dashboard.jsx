import { useState, useEffect } from "react";
import NewTransactions from "../components/NewTransactions";
import "../style/dashboard.scss";
import TransactionList from "../components/TransactionList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSun } from "@fortawesome/free-solid-svg-icons";
import MonthInput from "../components/MonthInput";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { getCurrentUserData } from "../utils/getUserData";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [elementVisible, setElementVisible] = useState(false);

  const [salary, setSalary] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
  });

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

  const incomeTransactions = transactions.filter((tx) => {
    if (tx.type !== "income" || tx.price === undefined) return false;
    const txDate = tx.createdAt?.toDate?.() || new Date(tx.createdAt);
    const txMonth = `${txDate.getFullYear()}-${String(
      txDate.getMonth() + 1
    ).padStart(2, "0")}`;
    return txMonth === selectedMonth;
  });

  const expenseTransactions = transactions.filter((tx) => {
    if (tx.type !== "expense" || tx.price === undefined) return false;
    const txDate = tx.createdAt?.toDate?.() || new Date(tx.createdAt);
    const txMonth = `${txDate.getFullYear()}-${String(
      txDate.getMonth() + 1
    ).padStart(2, "0")}`;
    return txMonth === selectedMonth;
  });

  const totalIncome = incomeTransactions.reduce((acc, tx) => acc + tx.price, 0);
  const totalExpense = expenseTransactions.reduce(
    (acc, tx) => acc + tx.price,
    0
  );
  const allTimeIncome = transactions
    .filter((tx) => tx.type === "income" && tx.price !== undefined)
    .reduce((acc, tx) => acc + tx.price, 0);

  const allTimeExpense = transactions
    .filter((tx) => tx.type === "expense" && tx.price !== undefined)
    .reduce((acc, tx) => acc + tx.price, 0);

  const balance = allTimeIncome - allTimeExpense;

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

  // Custom arrows for the Slider
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        ➡️
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        ⬅️
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

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
  // Pie Chart Colors
  const COLORS = [
    "#018420ff", // income.
    "#950303ff", // Expense
    "#2e3b7dff", // Expense
  ];
  const pieData = [
    { name: "Income", value: totalIncome },
    { name: "Expenses", value: totalExpense },
  ];

  // Calculate balance, needs, wants, and savings
  const monthlyIncome = totalIncome;

  const savings = monthlyIncome * 0.2;

  const wantsTransactions = expenseTransactions.filter(
    (tx) => tx.selectedType === "wants"
  );

  const needsTransactions = expenseTransactions.filter(
    (tx) => tx.selectedType === "needs"
  );

  const wants = wantsTransactions.reduce((acc, tx) => acc + tx.price, 0);
  const needs = needsTransactions.reduce((acc, tx) => acc + tx.price, 0);
  const needsReduced = monthlyIncome * 0.5 - needs;
  const wantsReduced = monthlyIncome * 0.3 - wants;
  const wantsNeedsSavings = [
    { name: "Wants", value: wantsReduced },
    { name: "Needs", value: needsReduced },
    { name: "Savings", value: savings },
  ];
  return (
    <div className="dashboard-container">
      {/* Nav Bar  */}
      <nav className="nav-bar">
        <div className="nav-bar-left">
          <h1 className="nav-bar-tittle">BROKLESS</h1>
        </div>

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
        <div className="transaction-field-month">
          <input
            type="month"
            id="start"
            name="start"
            min="2018-03"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="transaction-field-input-month"
          />
        </div>
        <Slider {...settings}>
          <div className="slider-page-1">
            <div className="main-info-row-1">
              <div className="main-info-column">
                <h2
                  className="main-info-tittle"
                  style={{ backgroundColor: "#036295ff", fontWeight: "bold" }}
                >
                  BALANCE
                </h2>
                <h2 className="main-info-subtitle">{balance} EUR </h2>
              </div>
            </div>
            <div className="main-info-row-3">
              <div className="main-info-column">
                <h2
                  className="main-info-tittle"
                  style={{ backgroundColor: "#018420ff", fontWeight: "bold" }}
                >
                  INCOME
                </h2>
                <h2 className="main-info-subtitle">{totalIncome} EUR </h2>
              </div>

              <div className="pie-chart-wrapper">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#00000"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="main-info-column">
                <h2
                  className="main-info-tittle"
                  style={{ backgroundColor: "#950303ff", fontWeight: "bold" }}
                >
                  EXPENSE{" "}
                </h2>
                <h2 className="main-info-subtitle">{totalExpense} EUR </h2>
              </div>
            </div>
          </div>
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={wantsNeedsSavings}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                  fill="#2e3b7dff"
                >
                  {wantsNeedsSavings.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="main-info-row ">
              <div className="main-info-column">
                <h2
                  className="main-info-tittle"
                  style={{ backgroundColor: "#018420ff", fontWeight: "bold" }}
                >
                  WANTS{" "}
                </h2>
                <h2 className="main-info-subtitle">{wantsReduced} EUR </h2>
              </div>
              <div className="main-info-column">
                <h2
                  className="main-info-tittle"
                  style={{ backgroundColor: "#950303ff", fontWeight: "bold" }}
                >
                  NEEDS{" "}
                </h2>
                <h2 className="main-info-subtitle">{needsReduced} EUR </h2>
              </div>
              <div className="main-info-column">
                <h2
                  className="main-info-tittle"
                  style={{ backgroundColor: "#2e3b7dff", fontWeight: "bold" }}
                >
                  SAVINGS
                </h2>{" "}
                <h2 className="main-info-subtitle">{savings} EUR </h2>
              </div>
            </div>
          </div>
        </Slider>
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

      <Footer />
    </div>
  );
}
