function ResultCard({ name, marks }) {
  const isPassed = marks >= 35;

  const cardStyle = {
    width: "300px",
    padding: "15px",
    margin: "20px auto",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  };

  const statusStyle = {
    color: isPassed ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Marks: {marks}</p>
      <p style={statusStyle}>
        Status: {isPassed ? "PASS" : "FAIL"}
      </p>
    </div>
  );
}

export default ResultCard;

