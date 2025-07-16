import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./ToastContainer.css"
import { removeToast } from '../../state/slices/toastSlice';

const ToastContainer = () => {
  const toasts = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    toasts.forEach(({ id, duration }) => {
      const timer = setTimeout(() => dispatch(removeToast(id)), duration);
      return () => clearTimeout(timer);
    });
  }, [toasts, dispatch]);

  return (
    <div className="toast-container">
      {toasts.map(({ id, message, type }) => (
        <div key={id} className={`toast toast-${type}`}>
          {message}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
