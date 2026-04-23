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
  return <h2>📊 Analytics Dashboard (coming soon)</h2>;
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
