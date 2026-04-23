function App() {

  const handleConnect = () => {
    alert("Connecting bank...");
  };

  const handleAnalytics = () => {
    alert("Opening analytics...");
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        WealthOS Dashboard
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "30px" }}>
        Welcome to your financial system.
      </p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button 
          onClick={handleConnect}
          style={{
            padding: "10px 16px",
            backgroundColor: "#22c55e",
            border: "none",
            borderRadius: "6px",
            color: "white"
          }}>
          Connect Bank
        </button>

        <button 
          onClick={handleAnalytics}
          style={{
            padding: "10px 16px",
            backgroundColor: "#334155",
            border: "none",
            borderRadius: "6px",
            color: "white"
          }}>
          View Analytics
        </button>
      </div>

    </div>
  );
}

export default App;
