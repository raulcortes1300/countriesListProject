import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
};

styles.button[":hover"] = {
  backgroundColor: "#0056b3",
};

export const HomePage = () => {
  return (
    <div style={styles.container}>
      <Link to="countries">
        <button style={styles.button}>Get Countries</button>
      </Link>
    </div>
  );
};
