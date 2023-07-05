import { NavLink } from "react-router-dom";
import { Container } from "./styles";
import { FaAddressCard, FaCarAlt, FaRegChartBar, FaUserFriends, FaUserPlus, FaUserTie } from "react-icons/fa";


export const MenuLateral = () => {
     
    return (
        <Container>
            <ul>
                {/* <NavLink
                    className="navbar-item"
                    to="/home/dashboard"
                >
                    <FaRegChartBar />
                    <span>Dashboard</span>
                </NavLink> */}
                <NavLink
                    className="navbar-item"
                    to="/home/socios"
                >
                    <FaUserFriends />
                    <span>Sócios</span>
                </NavLink>
                <NavLink
                    className="navbar-item"
                    to="/home/planos"
                >
                    <FaAddressCard /> 
                    <span>Planos</span>
                </NavLink>
                <NavLink
                    className="navbar-item"
                    to="/home/papeis"
                >
                    <FaUserTie /> 
                    <span>Papéis</span>
                </NavLink>
                {/* <NavLink
                    className="navbar-item"
                    to="/home/dependentes"
                >
                    <FaUserPlus /> 
                    <span>Dependentes</span>
                </NavLink>
                <NavLink
                    className="navbar-item"
                    to="/home/veiculos"
                >
                    <FaCarAlt /> 
                    <span>Veículos</span>
                </NavLink> */}
                
            </ul>
        </Container>
    );
}