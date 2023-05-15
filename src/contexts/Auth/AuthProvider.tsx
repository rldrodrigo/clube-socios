import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";
import { toast } from "react-toastify";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const api = useApi();

    // useEffect(() => {
    //   const validateToken = async () => {
    //     const storageData = sessionStorage.getItem('authToken');
    //     if (storageData) {
    //         const data = await api.validateToken(storageData);
    //         if (data.user) {
    //             setUser(data.user);
    //         } 
    //     }
    //   }
    //   validateToken();
    // }, [api])
    

    const signin = async (email: string, password: string) => {
        try {
            const data = await api.signin(email, password);
            if (data.dados) {
                // setUser(data.user);
                setToken(data.dados);
                setTokenLocalStorage(data.dados);
                return true;
            }
        } catch (err: any) {
            toast.error(err.response.data.erros[0]);
          }
        return false;
    }

    const signout = async () => {
        await api.logout();
        setUser(null);
        setToken('');
        setTokenLocalStorage('');
    }

    const setTokenLocalStorage = (token: string) => {
        sessionStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ token, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}