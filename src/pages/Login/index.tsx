import { ChangeEvent, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container, InputArea, LoginForm, WelcomeContainer } from "./styles";
import { FaLock, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

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
            // const isLogged = await auth.signin(email, password);
            // if (isLogged) {
            //     console.log('entrou aqui')
            //     navigate('/');
            // } else {
            //     alert("Não foi possível entrar no sistema");
            // }
            navigate('/home');
        } else {
            toast.error("Não foi possível fazer login");
        }
    }

    const handleSignup = () => {
        navigate('/signup');
    }

    return (
        <Container>
            <WelcomeContainer>
                <h2> Seja bem vindo! </h2>
                <p> Para acessar o sistema é necessário possuir uma conta.</p>
                <h3> Não possui uma conta?</h3>
                <button type="button" onClick={handleSignup}>Cadastrar</button>
            </WelcomeContainer>
            <LoginForm>
                <h2>Entrar no sistema</h2>
                <form>
                    <InputArea>
                        <FaUser style={{ color: '#CCC' }} />
                        <input
                            type="email"
                            value={email}
                            placeholder="E-mail"
                            onChange={handleEmailInput}
                            required
                        />
                    </InputArea>
                    <InputArea>
                        <FaLock style={{ color: '#CCC' }} />
                        <input
                            type="password"
                            value={password}
                            placeholder="Senha"
                            onChange={handlePasswordInput}
                            required
                        />
                    </InputArea>
                    <button onClick={handleLogin}>Entrar</button>
                </form>
            </LoginForm>
        </Container>
    )
}