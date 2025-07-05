import React from 'react'

const Button = ({ label, isActive, onClick }) => {
 return (
    <button
      onClick={() => onClick(label)}
      className={`category-btn ${isActive ? 'active' : ''}`}
    >
      {label}
    </button>
  );
}

export default Button