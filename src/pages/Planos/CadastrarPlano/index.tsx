import React, { useCallback, useState } from "react";
import {
  ModalContent,
  Title,
  Subtitle,
  Button,
  RowForm,
  DadosPlano,
  SendAreaButton,
  ModalHeader,
  TitleHeader,
  Content,
} from "./styles";
import { InputText } from "../../../components/InputText";
import api from "../../../services/api";
import { toast } from "react-toastify";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setLoading: (value: boolean) => void;
}

export default function CadastraPlano({ isOpen, onClose, setLoading }: ModalProps) {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipoRecorrencia, setTipoRecorrencia] = useState('');
  const [valorMensalidade, setValorMensalidade] = useState('');
  const [modalidade, setModalidade] = useState('');


  const handleClickCriarPlano = useCallback(async () => {
    setLoading(true);
    try {
        const response = await api.post<any>(
            `/planos/`,
            {
                nome,
                descricao,
                tipoRecorrencia,
                valorMensalidade : parseFloat(valorMensalidade),
                modalidade,
            },
        );
        toast.success('Plano Criado com sucesso');
        setLoading(false);
        onClose();
    } catch (e: any) {
        toast.error(e.response.data.erros[0]);
        setLoading(false);
    }
  }, [descricao, modalidade, nome, onClose, setLoading, tipoRecorrencia, valorMensalidade]);



  return (
    <>
      {isOpen && (
        <Content>
            <ModalContent>
            <ModalHeader>
                <TitleHeader>
                <Title> Novo Plano</Title>
                <Subtitle>Insira atentamente as informações</Subtitle>
                </TitleHeader>
                <Button onClick={onClose}>Voltar</Button>
            </ModalHeader>

            <DadosPlano>
                <RowForm>
                    <InputText label={"Nome"} placeholder={"Nome"} value={nome} onChange={(e)=> setNome(e.target.value)}/>
                    <InputText type="number" label={"Valor Mensalidade"} placeholder={"Valor"} value={valorMensalidade} onChange={(e)=> setValorMensalidade(e.target.value)}/>
                </RowForm>
                <RowForm>
                    <InputText label={"Tipo de Recorrência"} placeholder={"Tipo de Recorrência"} value={tipoRecorrencia} onChange={(e)=> setTipoRecorrencia(e.target.value)}/>
                    <InputText label={"Modalidade"} placeholder={"Modalidade"} value={modalidade} onChange={(e)=> setModalidade(e.target.value)}/>
                </RowForm>
                <RowForm>
                    <InputText label={"Descrição"} placeholder={"Descrição"} value={descricao} onChange={(e)=> setDescricao(e.target.value)}/>
                </RowForm>
            </DadosPlano>

            <SendAreaButton>
                <Button type="button" onClick={handleClickCriarPlano}>Cadastrar</Button>
            </SendAreaButton>
            </ModalContent>
        </Content>
      )}
    </>
  );
}
