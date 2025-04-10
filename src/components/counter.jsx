import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Counter() {
  const [clickCount, setClickCount] = useState(0);
  const [loopCount, setLoopCount] = useState(0);

  const navigate = useNavigate();

  const handleClick = () => {
    if (clickCount + 1 === 108) {
      setLoopCount(loopCount + 1);
      setClickCount(0);
    } else {
      setClickCount(clickCount + 1);
    }
  };

  const handleReset = () => {
    setClickCount(0);
    setLoopCount(0);
  };

  return (
    <div className="app">
      <header className="topbar" style={{ background: '#333', color: 'white', padding: '10px' }}>
        <div className="title" style={{ fontSize: '1.5rem' }}>Upasana</div>
        <nav>
          {/* 👇 Back to Home */}
          <button 
            onClick={() => navigate('/')} 
            style={{ background: 'none', border: 'none', color: 'white', fontSize: '1rem', cursor: 'pointer' }}
          >
            Home
          </button>
        </nav>
      </header>

      <main className="content" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>ॐ नमो भगवते वासुदेवाय नमः<br />
        ॐ श्री गुरु दत्तात्रेय श्रीपाद श्री वल्लभाय नमः</h1>
        <h3>प्रत्येक नाम:स्मरणानंतर + हे बटन दाबावे *</h3>
        <br />
        <h1>एकूण स्मरण: {clickCount}</h1>
        <h2>एकूण स्मरणिका: {loopCount}</h2>

        {/* Buttons */}
        <div style={{ marginTop: '20px' }}>
          <button 
            onClick={handleClick} 
            style={{ padding: '10px 20px', fontSize: '18px', marginRight: '10px' }}
          >
            + 
          </button>

          <button 
            onClick={handleReset} 
            style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Reset
          </button>
        </div>
      </main>
    </div>
  );
}

export default Counter;
