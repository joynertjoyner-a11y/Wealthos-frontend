import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(null);

  const runBudget = async () => {
    const response = await fetch(
      "https://wealthos-backend.onrender.com/budget",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          monthly_after_tax_income: 5000,
          fixed_expenses: [
            { name: "Rent", amount: 1500 },
            { name: "Car", amount: 700 }
          ],
          variable_expenses: [
            { name: "Food", amount: 600 },
            { name: "Fun", amount: 300 }
          ],
          target_needs_pct: 0.5,
          target_wants_pct: 0.3,
          target_savings_pct: 0.2,
          emergency_fund_goal: 0,
          debt_extra_payment_goal: 0,
          investing_goal: 0
        })
      }
    );

    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>WealthOS Budget Engine</h1>
      <button onClick={runBudget}>Run Budget</button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
