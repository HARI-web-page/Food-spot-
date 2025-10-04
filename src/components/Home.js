import React from 'react';
import { Link } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import restaurants from '../data/restaurants.json';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🍽️ Choose Your Restaurant</h2>
      {restaurants.map((res) => (
        <div key={res.id} style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '10px' }}>
          <img src={res.image} alt={res.name} width="200" />
          <h3>{res.name}</h3>
          <p>⭐ Rating: {res.rating}</p>
          <Link to={`/home/restaurant/${res.id}`}>View Menu</Link>
          <div style={{ marginTop: '10px' }}>
            <p>📲 QR Code (Scan to open menu):</p>
            <QRCodeCanvas value={`https://loquacious-axolotl-61e7f5.netlify.app/#/home/restaurant/${res.id}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
