import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import menus from '../data/menus.json';

function FoodDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Debug log
  console.log("📦 FoodDetail received:", location.state);

  // Try to get item from location.state
  const stateItem = location.state?.item;

  // Fallback: find item from menus.json using ID
  const fallbackItem = menus.find(food => String(food.id) === id);

  const item = stateItem || fallbackItem;
  const cart = location.state?.cart ?? [];
  const tableNo = location.state?.tableNo ?? "1";

  if (!item) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Food not found 😅</h2>
        <button
          onClick={() => navigate('/menu/1?table=' + tableNo)}
          style={{
            padding: '10px 20px',
            marginTop: '20px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          🔙 Go Back to Menu
        </button>
      </div>
    );
  }

  const updatedCart = [...cart, item];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px',
      backgroundColor: '#FFF5E1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h2 style={{
        fontSize: 'calc(24px + 2vw)',
        marginBottom: '25px',
        color: '#d35400',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      }}>
        {item.name}
      </h2>
      <img
        src={item.image}
        alt={item.name}
        width="300"
        height="300"
        style={{
          borderRadius: '16px',
          objectFit: 'cover',
          marginBottom: '25px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
        }}
      />
      <div style={{ fontSize: 'calc(16px + 0.5vw)', marginBottom: '10px', color: '#c0392b' }}>
        💰 Price: ₹{item.price}
      </div>
      <div style={{ fontSize: 'calc(14px + 0.5vw)', marginBottom: '20px', color: '#7f8c8d' }}>
        ⭐ Rating: {item.rating || "N/A"}
      </div>
      <button
        onClick={() => navigate('/bill', { state: { cart: updatedCart, tableNo } })}
        style={{
          padding: '12px 24px',
          fontSize: 'calc(14px + 0.5vw)',
          backgroundColor: '#e67e22',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        🛒 Go to Bill
      </button>
    </div>
  );
}

export default FoodDetail;
