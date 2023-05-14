import { FaUserEdit } from "react-icons/fa";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { MenuLateral } from "../../components/MenuLateral";
import { Route, Routes } from "react-router-dom";
import { Socios } from "../Socios";

export const Home = () => {
    return (
        <Container>
            <Header />
            <Content>
                <MenuLateral />
                <Routes>
                    <Route path="/" element={<Socios />} />
                    <Route path="/teste/socios" element={<Socios />} />
                </Routes>
            </Content>
        </Container>
    );
}