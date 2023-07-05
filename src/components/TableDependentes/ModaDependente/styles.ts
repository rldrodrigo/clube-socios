import styled from "styled-components";

export const Content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
`

export const ModalContent = styled.div`
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 1em;
  width: 80%;
  position: fixed;
  top: 40%;
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

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #1c1c1c;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #1c1c1c;
    border: 1px #1c1c1c solid;
  }
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

export const DadosDependente = styled.div`
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