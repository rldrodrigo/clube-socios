import { FaUserEdit } from "react-icons/fa";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { MenuLateral } from "../../components/MenuLateral";
import { Route, Routes } from "react-router-dom";
import { Socios } from "../Socios";

export const Home = ({ children }: { children: JSX.Element}) => {
    return (
        <Container>
            <Header />
            <Content>
                <MenuLateral />
                {children}
            </Content>
        </Container>
    );
}