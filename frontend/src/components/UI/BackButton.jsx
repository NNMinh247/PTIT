import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/')} 
      style={{
        position: 'absolute', 
        top: '20px', 
        left: '20px', 
        zIndex: 100,
        padding: '10px 20px',
        backgroundColor: '#cc0000',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      Trở về Sảnh
    </button>
  );
}