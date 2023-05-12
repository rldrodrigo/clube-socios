import { FaAddressCard, FaCube, FaHome, FaLock, FaRegChartBar, FaSignOutAlt, FaUser, FaUserCircle, FaUserEdit, FaUserFriends } from "react-icons/fa";
import { Container, Content, Header, MainContent, Menu, MenuUser } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Home = () => {
    
    const navigate = useNavigate();
    const [menuUser, setMenuUser] = useState(false);
    const handleClickUser = () => {
        setMenuUser(!menuUser);
    }

    const handleClickExit = () => {
        navigate('/');
        toast.success('Usuário deslogado com sucesso!')
    }

    const nomesMockados = [
        {
            name: 'Nome teste',
            document: '000.000.000-22',
            status: 'Ativo'
        },
        {
            name: 'Nome teste',
            document: '000.000.000-22',
            status: 'Ativo'
        },
        {
            name: 'Nome teste',
            document: '000.000.000-22',
            status: 'Ativo'
        },
        {
            name: 'Nome teste',
            document: '000.000.000-22',
            status: 'Ativo'
        },
        {
            name: 'Nome teste',
            document: '000.000.000-22',
            status: 'Ativo'
        },
    ];

    return (
        <Container>
            <Header>
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
            </Header>
            <Content>
                <Menu>
                    <ul>
                        <li>
                            <FaRegChartBar />
                            <span>Dashboard</span>
                        </li>
                        <li>
                            <FaUserFriends />
                            <span>Sócios</span>
                        </li>
                        <li>
                            <FaAddressCard /> 
                            <span>Planos</span>
                        </li>
                    </ul>
                </Menu>
                <MainContent>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Documento</th>
                                <th>Status</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            { nomesMockados.map(item => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.document}</td>
                                    <td>{item.status}</td>
                                    <td><button type="button"><FaUserEdit /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </MainContent>
            </Content>
        </Container>
    );
}