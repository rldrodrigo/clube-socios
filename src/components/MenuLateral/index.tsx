import { Container } from "./styles";
import { FaAddressCard, FaRegChartBar, FaUserFriends, FaUserTie } from "react-icons/fa";


export const MenuLateral = () => {
     
    return (
        <Container>
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
                <li>
                    <FaUserTie /> 
                    <span>Papéis</span>
                </li>

                
            </ul>
        </Container>
    );
}