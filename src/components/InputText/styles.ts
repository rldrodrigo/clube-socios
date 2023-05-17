import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 20px;
    margin: 2px;
    width: 100%;
    
    span {
        color: rgba(28, 28, 28, 0.4);
        font-size: 12px;
        position: absolute;
    }
`
export const InputArea = styled.div`
    width: 100%;

    input {
        border: none;
        width: 100%;
        height: 50px;

        :focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
`
export const ErrorArea = styled.div`

`