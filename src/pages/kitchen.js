import React, { useEffect, useState } from 'react';
import { ref, onChildAdded } from 'firebase/database';
import { db } from '../firebase';

function Kitchen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersRef = ref(db, 'orders');

    // Listen for new orders
    onChildAdded(ordersRef, (snapshot) => {
      const order = snapshot.val();
      setOrders(prev => [...prev, order]);
    });
  }, []);

  return (
    <div style={{ padding: '40px', backgroundColor: '#FFF5E1', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#d35400', marginBottom: '30px' }}>🍽️ Kitchen Orders</h2>
      {orders.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '20px' }}>No orders yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {orders.map((order, index) => (
            <li key={index} style={{
              padding: '20px',
              marginBottom: '20px',
              backgroundColor: '#fff8f0',
              borderRadius: '12px',
              boxShadow: '0 6px 15px rgba(174,165,165,0.3)'
            }}>
              <p style={{ fontWeight: 'bold', fontSize: '18px' }}>🛎️ Table {order.table_no}</p>
              <p>🍴 {order.items.join(', ')}</p>
              <p style={{ fontSize: '12px', color: '#7f8c8d' }}>⏱ {new Date(order.time).toLocaleTimeString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Kitchen;
