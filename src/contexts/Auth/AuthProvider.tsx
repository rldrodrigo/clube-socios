import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const api = useApi();


    useEffect(() => {
      const validateToken = async () => {
        const storageData = sessionStorage.getItem('authToken');
        if (storageData) {
            // const data = await api.validateToken(storageData);
            //setToken(storageData);
        }
      }
      validateToken();
    }, [api]);
    

    const signin = async (email: string, password: string) => {
        try {
            const data = await api.signin(email, password);
            if (data.dados) {
                // setUser(data.user);
                const user = JSON.stringify(jwtDecode(data.dados));
                if ( user ) {
                    sessionStorage.setItem('user', user);
                }
                setToken(data.dados);
                setTokenLocalStorage(data.dados);
                toast.success("Bem Vindo!");
                sessionStorage.setItem('login', email);
                return true;
            }
        } catch (err: any) {
            toast.error(err.response.data.erros[0]);
          }
        return false;
    }

    const signup = async (name: string, email: string, documento: string,   login: string, password: string) => {
        try {
            const data = await api.signup(name, email, documento, login, password);
            if (data.dados) {
                // setUser(data.user);
                setToken(data.dados);
                setTokenLocalStorage(data.dados);
                toast.success("Usuário Cadastrado com sucesso");
                sessionStorage.setItem('login', email);
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
        <AuthContext.Provider value={{ token, signin, signout, signup }}>
            {children}
        </AuthContext.Provider>
    );
}