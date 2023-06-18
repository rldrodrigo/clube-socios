import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        const { data } = await api.post('/validate', { token });
        return data;
    },
    signin: async (email: string, password: string) => {
        const { data } = await api.post('/colaboradores/login', { login: email, senha: password });
        return data;
    },
    signup: async (name: string, email: string, documento: string, login: string, password: string) => {
        const { data } = await api.post('/colaboradores/', 
        { 
            cliente: {
                nome: name,
                email,
                documento,
                login,
                senha: password,
            },
            papel: {
                nome: "Administrador"
            }
        });
        return data;
    },
    logout: async () => {
        const {data} = await api.post('/colaboradores/login');
        return data;
    }
})