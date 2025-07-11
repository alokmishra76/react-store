// components/Loader.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import './Loader.css';

const Loader = () => {
  const isLoading = useSelector((state) => state.loader.isLoading);

  if (!isLoading) return null;

  return (
    <div className="global-loader-overlay">
      <div className="global-loader-spinner"></div>
    </div>
  );
};

export default Loader;
