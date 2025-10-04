import React from "react";
import { useParams, Link } from "react-router-dom";

function TablePage() {
  const { tableId } = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Table {tableId}</h1>
      <Link to="/menu/1">Go to Menu</Link> {/* Example navigation */}
    </div>
  );
}

export default TablePage;
