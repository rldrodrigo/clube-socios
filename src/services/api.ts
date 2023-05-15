import axios from "axios";

const token = sessionStorage.getItem('authToken');

const api = axios.create({
    baseURL: process.env.REACT_APP_API, 
    headers: {
        authorization: token,
    }
});

export default api;