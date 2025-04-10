import React from 'react';

function Card({ text, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {text}
    </div>
  );
}

export default Card;
