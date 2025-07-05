// src/services/apiService.js
import axios from 'axios';
import { apiTimeout, baseURL } from '../../utils/apiConstant';

// Create axios instance
const api = axios.create({
  baseURL: baseURL,
  timeout: apiTimeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic methods
const apiService = {
  get: (url, config = {}) => api.get(url, config),
  post: (url, data, config = {}) => api.post(url, data, config),
  put: (url, data, config = {}) => api.put(url, data, config),
  delete: (url, config = {}) => api.delete(url, config),
};

export default apiService;
