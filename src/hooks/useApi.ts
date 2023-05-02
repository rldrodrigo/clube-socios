import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        // Só para testar remover depois
        return {
            user: { id: 3, name: 'Rodrigo', email: 'rodrigo@teste.com.br'},
        };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        // Só para testar remover depois
        return {
            user: { id: 3, name: 'Rodrigo', email: 'rodrigo@teste.com.br'},
            token: '123456789'
        };
        const response = await api.post('/signin', { email, password });
        return response.data;
    },
    logout: async () => {
        // Só para testar remover depois
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
})