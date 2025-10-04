import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

function KitchenDisplay() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersRef = ref(db, 'orders');
    onValue(ordersRef, snapshot => {
      const data = snapshot.val();
      console.log("Snapshot:", data);

      const allOrders = [];

      if (data) {
        Object.entries(data).forEach(([orderId, orderData]) => {
          allOrders.push({
            id: orderId,
            tableNo: orderData.tableNo || 'Unknown',
            time: orderData.createdAt
              ? new Date(orderData.createdAt).toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : 'Unknown',
            items: Array.isArray(orderData.items) ? orderData.items : [],
            status: orderData.status || 'pending'
          });
        });
      }

      const uniqueOrders = Array.from(
        new Map(allOrders.map(order => [order.id, order])).values()
      );

      setOrders(uniqueOrders);
    });
  }, []);

  const cardColors = [
    '#FDEBD0', '#D6EAF8', '#D5F5E3', '#FADBD8',
    '#FCF3CF', '#E8DAEF', '#F9E79F', '#ABEBC6'
  ];

  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#FFFDF7',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#D35400',
        fontSize: 'calc(24px + 1vw)',
        marginBottom: '30px'
      }}>
        🍽 Ordered Foods
      </h2>

      {orders.length === 0 ? (
        <p style={{
          textAlign: 'center',
          fontSize: '18px',
          color: '#7f8c8d',
          marginTop: '40px'
        }}>
          No orders yet. The kitchen is calm... waiting for the next foodish storm 🌪🍛
        </p>
      ) : (
        orders.map((order, index) => {
          const itemsLine = order.items.length > 0
            ? order.items.map(item => `${item.name} ₹${item.price}`).join(', ')
            : 'None';

          const bgColor = cardColors[index % cardColors.length];
          const table = order.tableNo;
          const time = order.time;
          const status = order.status;

          return (
            <div key={order.id} style={{
              marginBottom: '25px',
              padding: '20px',
              backgroundColor: bgColor,
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              fontSize: '18px',
              lineHeight: '1.8',
              maxWidth: '500px',
              margin: '0 auto',
              color: '#2c3e50'
            }}>
              <div>🪑 <strong>Table {table}</strong></div>
              <div>🍛 <strong>Items:</strong> {itemsLine}</div>
              <div>🕒 <strong>Time:</strong> {time}</div>
              <div>📦 <strong>Status:</strong> {status}</div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default KitchenDisplay;
