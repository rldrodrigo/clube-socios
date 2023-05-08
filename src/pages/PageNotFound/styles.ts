
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`
export const WelcomeContainer = styled.div`
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    color: white;
    background-color: #317FF5;

    button {
        background-color: transparent;
        text-transform: uppercase;
        margin: 8px;
        padding: 10px 25px;
        color: white;
        border-radius: 20px;
        border: 1px solid white;
    }

    @media (max-width: 900px) {
        width: 100vw;
    }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    background-color: white;
    width: 60vw;
    height: 100vh;
    align-items: center;
    color: #7BADF7;
    justify-content: center;

    @media (max-width: 900px) {
        width: 100vw;
    }
    
`;

