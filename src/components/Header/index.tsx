import { useNavigate } from "react-router-dom";
import { Container, MenuUser } from "./styles";
import img404 from "../../assets/img/404.svg"
import { toast } from "react-toastify";
import { useState } from "react";
import { FaCube, FaUserCircle } from "react-icons/fa";


export const Header = () => {
    const navigate = useNavigate();
    const [menuUser, setMenuUser] = useState(false);
    const handleClickUser = () => {
        setMenuUser(!menuUser);
    }

    const handleClickExit = () => {
        navigate('/');
        toast.success('Usuário deslogado com sucesso!')
    }
      
    return (
        <Container>
            <div style={{ color: 'white', fontSize: '24px', margin: '0px 16px' }}><FaCube /></div>
            <div style={{ color: 'white', fontSize: '24px', margin: '0px 16px' }}><button type="button" onClick={handleClickUser}><FaUserCircle /></button></div>
            {menuUser && (<MenuUser>
                <ul>
                    <li>Configurações</li>
                    <li onClick={handleClickExit}>
                        Sair
                    </li>
                </ul>
            </MenuUser>)}
        </Container>
    );
}