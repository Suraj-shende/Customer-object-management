
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/token/`, { username, password });
    localStorage.setItem('accessToken', response.data.access);
    localStorage.setItem('refreshToken', response.data.refresh);
};

export const validateToken = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        throw new Error('Token not found');
    }
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get(`${API_URL}/validate-token/`, { headers });
    return response.data.isValid;
};
