import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundImage: 'url(/images/welcome-bg.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      textShadow: '2px 2px 6px rgba(0,0,0,0.7)'
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '15px' }}>
        🍽️ Welcome to Food Shower!
      </h1>
      <p style={{ fontSize: '22px', fontWeight: '500', marginBottom: '30px' }}>
        Your delicious journey starts here.
      </p>
      <button
        onClick={() => navigate('/menu/1')}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#ff6f61',
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
        ✅ Order Now
      </button>
    </div>
  );
}

export default Welcome;
