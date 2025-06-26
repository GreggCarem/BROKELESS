import "../style/transaction-list.scss";

export default function TransactionList({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return <p className="empty-list">No transactions yet.</p>;
  }

  return (
    <div className="transaction-list">
      <h2 className="transaction-list-title">Your Transactions</h2>

      <ul className="transaction-list-items">
        {transactions.map((tx, index) => (
          <li key={index} className={`transaction-item ${tx.type}`}>
            <span className="transaction-type">{tx.type.toUpperCase()}</span>
            <span className="transaction-label">{tx.label}</span>
            <span className="transaction-amount">
              {tx.type === "expense" ? "-" : "+"} €{tx.amount}
            </span>
            <span className="transaction-date">
              {new Date(tx.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
