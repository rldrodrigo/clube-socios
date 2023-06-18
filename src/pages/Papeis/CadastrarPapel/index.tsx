import React, { useCallback, useState } from "react";
import { InputText } from "../../../components/InputText";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { Button, Content, DadosPapel, ModalContent, ModalHeader, RowForm, SendAreaButton, Subtitle, Title, TitleHeader } from "./syles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setLoading: (value: boolean) => void;
}

export default function CadastrarPapel({ isOpen, onClose, setLoading }: ModalProps) {

  const [nome, setNome] = useState('');


  const handleClickCriarPapel = useCallback(async () => {
    setLoading(true);
    try {
        const response = await api.post<any>(
            `/papeis/`,
            {
                nome,
            },
        );
        toast.success('Papel Criado com sucesso');
        setLoading(false);
        onClose();
    } catch (e: any) {
        toast.error(e.response.data.erros[0]);
        setLoading(false);
    }
  }, [nome, onClose, setLoading]);



  return (
    <>
      {isOpen && (
        <Content>
            <ModalContent>
                <ModalHeader>
                    <TitleHeader>
                    <Title> Novo Papel</Title>
                    <Subtitle>Insira atentamente as informações</Subtitle>
                    </TitleHeader>
                    <Button onClick={onClose}>Voltar</Button>
                </ModalHeader>

                <DadosPapel>
                    <RowForm>
                        <InputText label={"Nome"} placeholder={"Nome"} value={nome} onChange={(e)=> setNome(e.target.value)}/>
                    </RowForm>
                </DadosPapel>

                <SendAreaButton>
                    <Button type="button" onClick={handleClickCriarPapel}>Cadastrar</Button>
                </SendAreaButton>
            </ModalContent>
        </Content>
      )}
    </>
  );
}
