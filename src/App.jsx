import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const runBudget = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("https://wealthos-backend.onrender.com/budget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          monthly_after_tax_income: 5000,
          fixed_expenses: [{ name: "Rent", amount: 1500 }],
          variable_expenses: [{ name: "Food", amount: 500 }],
          savings_goal: 500,
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (e) {
      setError("Request failed. (Backend may be sleeping.)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1>WealthOS</h1>
      <p>If you can see this, the frontend is working ✅</p>

      <button onClick={runBudget} disabled={loading}>
        {loading ? "Running..." : "Run Budget"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <pre style={{ marginTop: 12, background: "#111", color: "#0f0", padding: 12, overflowX: "auto" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
