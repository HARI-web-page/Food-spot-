import React from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import menus from "../data/menus.json";

function Menu() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const restaurantId = parseInt(id);
  const menuItems = menus.filter(item => item.restaurantId === restaurantId);

  const tableId = searchParams.get("table") || "1";

  // Navigate to FoodDetails page on click
  const handleItemClick = (item) => {
  navigate(`/food/${item.id}`, { state: { item, tableNo: tableId } });

  };

  return (
    <div style={{ minHeight: "100vh", padding: "40px", backgroundColor: "#FFF5E1" }}>
      <h2 style={{ textAlign: "center", color: "#d35400" }}>
        🍴 Menu – Restaurant {restaurantId} (Table {tableId})
      </h2>

      {menuItems.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              style={{
                cursor: "pointer",
                marginBottom: "20px",
                padding: "20px",
                backgroundColor: "#fff8f0",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <img
                src={item.image}
                alt={item.name}
                width="100"
                height="100"
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginRight: "20px"
                }}
              />
              <div>
                <div style={{ fontWeight: "bold", fontSize: "18px" }}>{item.name}</div>
                <div>₹{item.price}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>No menu items found.</p>
      )}
    </div>
  );
}

export default Menu;