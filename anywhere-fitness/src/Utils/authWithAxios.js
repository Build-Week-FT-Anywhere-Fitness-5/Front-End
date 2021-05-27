import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        // REPLACE WITH BACKEND LINK****  baseURL: 'http://localhost:5000/api'
    });
}