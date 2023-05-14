import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API, 
    headers: {
        authorization: '12345'
    }
});

export default api;