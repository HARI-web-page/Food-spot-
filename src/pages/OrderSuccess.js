import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundImage: 'url(/images/thankyou-bg.jpeg)', // background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      textShadow: '2px 2px 6px rgba(0,0,0,0.7)'
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '15px' }}>
        🎉 Thank You for Your Order!
      </h1>
      <p style={{ fontSize: '22px', fontWeight: '500', marginBottom: '30px' }}>
        We hope you enjoy your meal.
      </p>
      <button
        onClick={() => navigate('/menu/1')} // changed to Go Menu
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#4caf50',
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
        🦇 Go Menu
      </button>
    </div>
  );
}

export default OrderSuccess;
