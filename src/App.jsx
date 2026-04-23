import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <h1>WealthOS Dashboard</h1>
      <p>Welcome to your financial system.</p>

      <button onClick={() => navigate("/connect")}>
        Connect Bank
      </button>

      <button onClick={() => navigate("/analytics")} style={{ marginLeft: 10 }}>
        View Analytics
      </button>
    </div>
  );
}

function Connect() {
  return <h2>🔗 Bank Connection Page (coming soon)</h2>;
}

function Analytics() {
  return (
    <div style={{ padding: 40 }}>
      <h1>📊 Analytics Dashboard</h1>

      <div style={{ marginTop: 20 }}>
        <div style={{ background: "#1e293b", padding: 20, marginBottom: 10 }}>
          💰 Total Balance: $12,450
        </div>

        <div style={{ background: "#1e293b", padding: 20, marginBottom: 10 }}>
          📈 Monthly Income: $4,200
        </div>

        <div style={{ background: "#1e293b", padding: 20 }}>
          📉 Expenses: $2,100
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}
