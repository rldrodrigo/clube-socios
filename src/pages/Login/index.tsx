import { ChangeEvent, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                console.log('entrou aqui')
                navigate('/');
            } else {
                alert("Não foi possível entrar no sistema");
            }
        }
    }

    return (
        <div>
            <h2> Página Fechada </h2>
            
            <input
                type="text"
                value={email}
                placeholder="Digite seu e-mail"
                onChange={handleEmailInput}
            />
            <input
                type="password"
                value={password}
                placeholder="Digite sua senha"
                onChange={handlePasswordInput}
            />

            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}