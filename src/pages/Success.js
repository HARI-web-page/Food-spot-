import React from 'react';

function Success() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF5E1',
      textAlign: 'center',
      padding: '40px'
    }}>
      <h2 style={{ fontSize: '32px', color: '#27ae60' }}>✅ Order Placed Successfully!</h2>
      <p style={{ fontSize: '18px', color: '#7f8c8d', marginTop: '20px' }}>
        Your order is being prepared. Thank you for choosing Food Shower 🍽️
      </p>
    </div>
  );
}

export default Success;
