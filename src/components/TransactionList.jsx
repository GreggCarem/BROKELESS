import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { getCurrentUserData } from "../utils/getUserData";
import { db } from "../config/firebase";
import "../style/transaction-list.scss";

export default function TransactionList() {
  const [expenses, setExpenses] = useState([]);
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
  });

  // Listen to transactions in real time
  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, "expense"),
      where("uid", "==", currentUser.uid)
    );

    let unsubscribe;

    try {
      unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const expenseData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setExpenses(expenseData);
        },
        (error) => {
          console.error("Error in onSnapshot listener:", error);
        }
      );
    } catch (err) {
      console.error("Failed to attach onSnapshot:", err);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [currentUser]);

  // Load user data for currency symbol
  useEffect(() => {
    const loadUserData = async () => {
      const data = await getCurrentUserData();
      if (data) setUserData(data);
    };
    loadUserData();
  }, []);

  let currencyIcon = "";
  if (userData?.currency === "EUR") currencyIcon = "€";
  else if (userData?.currency === "USD") currencyIcon = "$";
  else if (userData?.currency === "GBP") currencyIcon = "£";

  // Group expenses by month
  const groupByMonth = (items) => {
    return items.reduce((groups, item) => {
      const date = item.createdAt?.toDate?.() || new Date(item.createdAt);
      const yearMonth = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;

      if (!groups[yearMonth]) {
        groups[yearMonth] = [];
      }
      groups[yearMonth].push(item);
      return groups;
    }, {});
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesLabel = expense.label?.toLowerCase().includes(searchTerm);
    const matchesType =
      filterType === "all" ||
      expense.selectedType === filterType ||
      expense.type === filterType;

    return matchesLabel && matchesType;
  });
  const groupedExpenses = groupByMonth(filteredExpenses);

  // Sort months DESCENDING
  const sortedMonths = Object.keys(groupedExpenses).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  // Find the index of selectedMonth
  const selectedIndex = sortedMonths.indexOf(selectedMonth);

  const monthsToShow = [];
  if (selectedIndex !== -1) {
    monthsToShow.push(sortedMonths[selectedIndex]);
    if (selectedIndex + 1 < sortedMonths.length) {
      monthsToShow.push(sortedMonths[selectedIndex + 1]);
    }
  } else if (sortedMonths.length > 0) {
    monthsToShow.push(sortedMonths[0]);
    if (sortedMonths[1]) monthsToShow.push(sortedMonths[1]);
  }

  const totalSum = filteredExpenses.reduce((sum, tx) => {
    return tx.type === "expense" ? sum - tx.price : sum + tx.price;
  }, 0);

  return (
    <div className="transaction-list">
      <div className="transaction-list-header">
        <h2 className="transaction-list-header-title">Your Transactions</h2>
        <div className="transaction-list-filters">
          <input
            type="text"
            placeholder="Search by label..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            className="transaction-list-filter-search"
          />
        </div>
        <div className="transaction-list-filter-input">
          <input
            type="month"
            id="start"
            name="start"
            min="2018-03"
            className="transaction-list-filter-input-month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </div>
      </div>

      {expenses.length === 0 ? (
        <p className="transaction-list-title">No transactions found.</p>
      ) : (
        monthsToShow.map((monthKey) => {
          const [year, month] = monthKey.split("-");
          const monthLabel = new Date(`${year}-${month}-01`).toLocaleString(
            "en-US",
            { month: "long", year: "numeric" }
          );

          return (
            <div key={monthKey} className="transaction-month-group">
              <h3 className="transaction-list-title">{monthLabel}</h3>
              <ul className="transaction-list-items">
                {[...groupedExpenses[monthKey]]
                  .sort((a, b) => {
                    const dateA =
                      a.createdAt?.toDate?.() || new Date(a.createdAt);
                    const dateB =
                      b.createdAt?.toDate?.() || new Date(b.createdAt);
                    return dateB - dateA;
                  })
                  .map((expense) => (
                    <li
                      key={expense.id}
                      className={`transaction-item ${expense.type}`}
                    >
                      <span className="transaction-type">
                        {expense.type.toUpperCase()}
                      </span>
                      <span className="transaction-label">
                        {expense.label.toUpperCase()}
                      </span>
                      {expense.selectedType && (
                        <span className="transaction-label-2">
                          {expense.selectedType.toUpperCase()}
                        </span>
                      )}
                      <span className="transaction-amount">
                        {expense.type === "expense" ? "-" : "+"} {currencyIcon}
                        {expense.price}
                      </span>
                      <span className="transaction-date">
                        {expense.createdAt?.toDate?.().toLocaleString("en-GB", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        })}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
}
