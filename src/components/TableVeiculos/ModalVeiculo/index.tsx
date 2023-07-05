import React, { useCallback, useState } from "react";
import { InputText } from "../../InputText";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { Content, DadosVeiculo, ModalContent, Button, ModalHeader, RowForm, SendAreaButton, Subtitle, Title, TitleHeader } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setLoading: (value: boolean) => void;
  socioId: any;
  veiculo?: any;
}

export default function ModalVeiculo({ isOpen, onClose, setLoading, socioId, veiculo }: ModalProps) {

  const [placa, setPlaca] = useState('');


  const handleClickCriarPapel = useCallback(async () => {
    setLoading(true);
    if (veiculo) {
        try {
            const response = await api.put<any>(
                `/socios/${socioId}/veiculos/${veiculo.id}`,
                {
                    placa,
                },
            );
            toast.success('Veículo Atualizado com sucesso');
            setLoading(false);
            onClose();
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
    } else {
        try {
            const response = await api.post<any>(
                `/socios/${socioId}/veiculos`,
                {
                    placa,
                },
            );
            toast.success('Veículo Criado com sucesso');
            setLoading(false);
            onClose();
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
    }
  }, [setLoading, veiculo, socioId, placa, onClose]);



  return (
    <>
      {isOpen && (
        <Content>
            <ModalContent>
                <ModalHeader>
                    <TitleHeader>
                    <Title> { veiculo ? 'Atualizar Veículo' : 'Novo Veículo'}</Title>
                    <Subtitle>Insira atentamente as informações</Subtitle>
                    </TitleHeader>
                    <Button onClick={onClose}>Voltar</Button>
                </ModalHeader>

                <DadosVeiculo>
                    <RowForm>
                        <InputText label={"Placa"} placeholder={ veiculo ? veiculo.placa : "Placa"} value={placa} onChange={(e)=> setPlaca(e.target.value)}/>
                    </RowForm>
                </DadosVeiculo>

                <SendAreaButton>
                    <Button type="button" onClick={handleClickCriarPapel}>{ veiculo ? 'Atualizar' : 'Cadastrar' }</Button>
                </SendAreaButton>
            </ModalContent>
        </Content>
      )}
    </>
  );
}
