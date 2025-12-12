import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function Lobby() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#1a1a1a', 
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>PTIT VIRTUAL TOUR</h1>
      <p style={{ marginBottom: '40px' }}>Chọn cơ sở tham quan</p>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <button 
          onClick={() => navigate('/ptit-hd')}
          style={{ 
            padding: '20px 40px', 
            fontSize: '18px', 
            cursor: 'pointer',
            background: '#e63946',
            color: 'white',
            border: 'none',
            borderRadius: '8px'
          }}>
          Cơ sở Hà Đông
        </button>

        <button 
          onClick={() => navigate('/ptit-nt')}
          style={{ 
            padding: '20px 40px', 
            fontSize: '18px', 
            cursor: 'pointer',
            background: '#457b9d',
            color: 'white',
            border: 'none',
            borderRadius: '8px'
          }}>
          Cơ sở Khác
        </button>
      </div>
    </div>
  );
}