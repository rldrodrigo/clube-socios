
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
    background-color: #1C1C1C;

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

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    background-color: white;
    width: 60vw;
    height: 100vh;
    align-items: center;
    color: #1C1C1C;
    justify-content: center;

    button {
        height: 36px;
        width: 200px;
        margin: 10px;
        border: 0;
        font-weight: bold;
        background-color: #1C1C1C;
        color: white;
        text-transform: uppercase;
        border-radius: 12px;
        text-align: center;
    }

    @media (max-width: 900px) {
        width: 100vw;
    }
    
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    background-color: #EEE;
    padding: 10px;

    input {
        margin-left: 10px;
        height: 36px;
        width: 400px;
        text-align: left;
        background-color: transparent;
        border: none;
        padding: 10px;
    }
    
    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;