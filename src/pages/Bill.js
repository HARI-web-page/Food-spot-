import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

function Bill() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [], tableNo = "1" } = location.state || {};
  const [placing, setPlacing] = useState(false);

  const uniqueCart = Array.from(new Map(cart.map(item => [item.id, item])).values());

  if (!uniqueCart || uniqueCart.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>No items in the bill.</p>;
  }

  const placeOrder = async () => {
    try {
      setPlacing(true);
      const orderData = {
        tableNo,
        items: uniqueCart.map(item => ({
          id: item.id ?? Math.random().toString(36).slice(2),
          name: item.name,
          price: item.price
        })),
        status: "pending",
        createdAt: new Date().toISOString()
      };
      await push(ref(db, 'orders'), orderData);
      alert(`✅ Order placed for Table ${tableNo}`);
      navigate('/thankyou');
    } catch (error) {
      console.error("❌ Firebase error:", error);
      alert("Failed to place order.");
    } finally {
      setPlacing(false);
    }
  };

  const total = uniqueCart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ minHeight: '100vh', padding: '40px', backgroundColor: '#FFF5E1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontSize: 'calc(24px + 2vw)', marginBottom: '25px', color: '#d35400', textAlign: 'center' }}>
        🧾 Your Bill – Table {tableNo}
      </h2>

      <div style={{ padding: '30px', backgroundColor: '#fff8f0', borderRadius: '16px', boxShadow: '0 6px 20px rgba(174, 165, 165, 0.3)', textAlign: 'center', width: '100%', maxWidth: '400px' }}>
        {uniqueCart.map(item => (
          <div key={item.id} style={{ fontSize: '18px', marginBottom: '10px', color: '#c0392b' }}>
            {item.name} – ₹{item.price}
          </div>
        ))}
        <h3>Total: ₹{total}</h3>
      </div>

      <button
        onClick={placeOrder}
        disabled={placing}
        style={{
          marginTop: '30px',
          padding: '12px 24px',
          fontSize: 'calc(14px + 0.5vw)',
          backgroundColor: placing ? '#aaa' : '#27ae60',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: placing ? 'not-allowed' : 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={e => !placing && (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {placing ? '⏳ Placing Order...' : '✅ Place Order'}
      </button>

      <button
        onClick={() => navigate(`/menu/1?table=${tableNo}`)}
        style={{
          marginTop: '15px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        🔄 Go to Menu
      </button>
    </div>
  );
}

export default Bill;
