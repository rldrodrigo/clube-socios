
import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: auto;
    margin-top: 60px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
        text-align: left;
        margin: 4px;
    }
`;

export const DadosPessoaisArea = styled.div`
    padding: 24px;
    
`;

export const PlanoArea = styled.div`
    padding: 24px;  
`;

export const EnderecoArea = styled.div`
    padding: 24px;
`;

export const RowForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    .input-text {
        width: 300px;
    }
`;

export const SwitchInput = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    align-items: flex-start;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 20px;
    margin: 2px;

    span {
            color: rgba(28, 28, 28, 0.4);
            font-size: 12px;
        }
`;

export const SendAreaButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    padding-right: 24px;
`;

export const VeiculosArea = styled.div`
    padding: 24px;
`;

export const DependentesArea = styled.div`
    padding: 24px;
`;