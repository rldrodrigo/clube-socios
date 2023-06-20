import { ChangeEvent, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { FaLock, FaUser, FaRegEnvelope, FaUserCircle, FaAddressCard } from "react-icons/fa";
import { Container, InputArea, LoginForm, WelcomeContainer } from "../Login/styles";
import { toast } from "react-toastify";

export const SignUp = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [documento, setDocumento] = useState('');

    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleDocumentoInput = (e: ChangeEvent<HTMLInputElement>) => {
        setDocumento(e.target.value);
    }

    const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    }

    const handleSignup = async () => {
        if (email && password && login && documento && name) {
            const isLogged = await auth.signup(name, email, documento, login, password);
            if (isLogged) {
                navigate('/');
            } else {
                toast.warn("Não foi possível entrar no sistema");
            }
        }
    }

    const handleSignIn = () => {
        navigate('/');
    }

    return (
        <Container>
            <WelcomeContainer>
                <h2> Seja bem vindo! </h2>
                <p> Para acessar o sistema é necesssário possuir uma conta.</p>
                <h3> Já possui uma conta?</h3>
                <button type="button" onClick={handleSignIn}>Entrar</button>
            </WelcomeContainer>
            <LoginForm>
                <h2>Criar uma conta</h2>
                <InputArea>
                    <FaUser style={{ color: '#CCC' }} />
                    <input
                        type="text"
                        value={name}
                        placeholder="Nome"
                        onChange={handleNameInput}
                        id="nome"
                    />
                </InputArea>
                <InputArea>
                    <FaRegEnvelope style={{ color: '#CCC' }} />
                    <input
                        type="text"
                        value={email}
                        placeholder="E-mail"
                        onChange={handleEmailInput}
                        id="email"
                    />
                </InputArea>
                <InputArea>
                    <FaAddressCard style={{ color: '#CCC' }} />
                    <input
                        type="text"
                        value={documento}
                        placeholder="Documento"
                        onChange={handleDocumentoInput}
                        id="documento"
                    />
                </InputArea>
                <InputArea>
                    <FaUserCircle style={{ color: '#CCC' }} />
                    <input
                        type="text"
                        value={login}
                        placeholder="Login"
                        onChange={handleLoginInput}
                        id="login"
                    />
                </InputArea>
                <InputArea>
                    <FaLock style={{ color: '#CCC' }} />
                    <input
                        type="password"
                        value={password}
                        placeholder="Senha"
                        onChange={handlePasswordInput}
                        id="senha"
                    />
                </InputArea>
                <button onClick={handleSignup}>Cadastrar</button>
            </LoginForm>
        </Container>
    )
}