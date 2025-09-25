// src/axiosConfig.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7150/api',
    //headers: {
    //    'Content-Type': 'application/json',
    //},
});

export default api;
