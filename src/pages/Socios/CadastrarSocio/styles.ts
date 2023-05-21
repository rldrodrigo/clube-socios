import styled from "styled-components";

export const ModalContent = styled.div`
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 1em;
  width: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Subtitle = styled.p`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  padding: 5px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #1c1c1c;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
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

export const DadosPessoaisArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 24px;
  width: 100%;
`;

export const EnderecoArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 24px;
  width: 100%;
`;

export const SendAreaButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    padding-right: 24px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  button {
    height: 36px;
  }
`
export const TitleHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`