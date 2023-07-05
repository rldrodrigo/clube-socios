import React, { useCallback, useState } from "react";
import { InputText } from "../../InputText";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { Content, DadosDependente, ModalContent, Button, ModalHeader, RowForm, SendAreaButton, Subtitle, Title, TitleHeader } from "./styles";
import { SwitchInput } from "../../../pages/Socios/EditarSocio/styles";
import { Switch } from "@mui/material";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setLoading: (value: boolean) => void;
  socioId: any;
  dependente?: any;
}

export default function ModalDependente({ isOpen, onClose, setLoading, socioId, dependente }: ModalProps) {

  const [nome, setNome] = useState(dependente ? dependente.cliente.nome : '');
  const [documento, setDocumento] = useState(dependente ? dependente.cliente.documento : '');
  const [login, setLogin] = useState(dependente ? dependente.cliente.login : '');
  const [email, setEmail] = useState(dependente ? dependente.cliente.email : '');
  const [ativo, setAtivo] = useState(dependente ? dependente.cliente.ativo : '');
  const [senha, setSenha] = useState(dependente ? dependente.cliente.senha : '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAtivo(!ativo);
 };


  const handleClickCriarPapel = useCallback(async () => {
    setLoading(true);
    if (dependente) {
        try {
            const response = await api.put<any>(
                `/socios/${socioId}/dependentes/${dependente.id}`,
                {
                    cliente: {
                        nome: nome,
                        documento: documento,
                        login: login,
                        email: email
                    },
                },
            );
            toast.success('Dependente Atualizado com sucesso');
            setLoading(false);
            onClose();
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
    } else {
        try {
            const response = await api.post<any>(
                `/socios/${socioId}/dependentes`,
                {
                    cliente: {
                        nome: nome,
                        documento: documento,
                        login: login,
                        senha: senha,
                        email: email,
                        ativo: ativo,
                    },
                },
            );
            toast.success('Dependente Criado com sucesso');
            setLoading(false);
            onClose();
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
    }
  }, [setLoading, dependente, socioId, nome, onClose, documento, login, senha, email, ativo]);



  return (
    <>
      {isOpen && (
        <Content>
            <ModalContent>
                <ModalHeader>
                    <TitleHeader>
                    <Title> { dependente ? 'Atualizar Dependente' : 'Novo Dependente'}</Title>
                    <Subtitle>Insira atentamente as informações</Subtitle>
                    </TitleHeader>
                    <Button onClick={onClose}>Voltar</Button>
                </ModalHeader>

                <DadosDependente>
                    <RowForm>
                        <InputText label={"Nome"} placeholder={ dependente ? dependente.cliente.nome : "Nome"} value={nome} onChange={(e)=> setNome(e.target.value)}/>
                        <InputText label={"Email"} placeholder={ dependente ? dependente.cliente.email : "Email"} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </RowForm>
                    <RowForm>
                        <InputText label={"Login"} placeholder={ dependente ?  dependente.cliente.login : "Login" } value={login} onChange={(e)=> setLogin(e.target.value)}/>
                        <InputText label={"Documento"} placeholder={ dependente ?  dependente.cliente.documento : "Documento" } value={documento} onChange={(e)=> setDocumento(e.target.value)}/>
                        <SwitchInput>
                            <span>Status</span>
                            <Switch color="success" className="switch" checked={ativo} onChange={handleChange}/>
                        </SwitchInput>
                    </RowForm>
                    { !dependente && (<RowForm>
                        <InputText label={"Senha"} placeholder={ dependente ?  dependente.cliente.senha : "Senha" } value={senha} onChange={(e)=> setSenha(e.target.value)}/>
                    </RowForm>)}
                </DadosDependente>

                <SendAreaButton>
                    <Button type="button" onClick={handleClickCriarPapel}>{ dependente ? 'Atualizar' : 'Cadastrar' }</Button>
                </SendAreaButton>
            </ModalContent>
        </Content>
      )}
    </>
  );
}
