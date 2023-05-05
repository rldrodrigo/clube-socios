import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/colaboradores/login', { login: email, senha: password });
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/colaboradores/login');
        return response.data;
    }
})