import { useNavigate } from "react-router-dom";
import { Container, MainContent, WelcomeContainer } from "./styles";
import img404 from "../../assets/img/404.svg"


export const PageNotFound = () => {
    const navigate = useNavigate();

    const handleNavigateToHome = async () => {
        navigate('/');
      }

      
    return (
        <Container>
            <WelcomeContainer>
                <p> Deseja voltar para a tela de login?</p>
                <button type="button" onClick={handleNavigateToHome}>Voltar</button>
            </WelcomeContainer>
            <MainContent>
                <h2> Página não econtrada</h2>
                <img src={img404} alt="Not Found" />
            </MainContent>
        </Container>
    );
}