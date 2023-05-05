
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    background-color: #CCCCCC;
    width: 50vw;
    height: 50vw;
    height: 200px;
    align-items: center;

    input, button {
        margin: 10px;
    }

    input {
        height: 36px;
        width: 60%;
        text-align: center;
    }

    button {
        height: 36px;
        width: 60%;
        font-weight: bold;
        background-color: #CCAACC;
        border: 0;
        border-radius: 12px;
    }
`;
