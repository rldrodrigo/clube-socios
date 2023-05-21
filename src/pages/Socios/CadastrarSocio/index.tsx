import React, { useCallback, useState } from "react";
import {
  ModalContent,
  Title,
  Subtitle,
  Button,
  RowForm,
  DadosPessoaisArea,
  EnderecoArea,
  SendAreaButton,
  ModalHeader,
  TitleHeader,
} from "./styles";
import { InputText } from "../../../components/InputText";
import formatCpfCnpj from "../../../utils/formatCpfCnpj";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { CreateButton, TitleArea } from "../TableSocios/styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setLoading: (value: boolean) => void;
}

export default function CadastrarSocio({ isOpen, onClose, setLoading }: ModalProps) {

  const [apelido, setApelido] = useState('');
  const [diaVencimentoPagamento, setDiaVencimentoPagamento] = useState('');
  const [contato, setContato] = useState('');
  const [plano, setPlano] = useState('');
  const [nome, setNome] = useState('');
  const [documento, setDocumento] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [pais, setPais] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');


  const handleClickCriarSocio = useCallback(async () => {
    setLoading(true);
    try {
        const response = await api.post<any>(
            `/socios/`,
            {
                apelido: apelido,
                diaVencimentoPagamento: parseInt(diaVencimentoPagamento, 10),
                contato: contato,
                plano: {
                  nome: "Plano Basico",
                  descricao: "Plano Basico",
                  tipoRecorrencia: "Mensal",
                  valorMensalidade: 100,
                  modalidade: "Teste"
                },
                cliente: {
                    nome: nome,
                    documento: documento,
                    login: login,
                    email: email,
                    senha: senha,
                },
                endereco: {
                    pais: pais,
                    cidade: cidade,
                    cep: cep,
                    bairro: bairro,
                    rua: rua,
                    numero: parseInt(numero, 10),
                }
            },
        );
        toast.success('Cliente Criado com sucesso');
        setLoading(false);
        onClose();
    } catch (e: any) {
        toast.error(e.response.data.erros[0]);
        setLoading(false);
    }
  }, [
    apelido,
    diaVencimentoPagamento,
    nome,
    documento,
    email,
    senha,
    pais,
    cidade,
    cep,
    bairro,
    rua,
    numero,
    contato,
    login,
    setLoading,
    onClose,
]);



  return (
    <>
      {isOpen && (
        <ModalContent>
          <ModalHeader>
            <TitleHeader>
              <Title> Novo Sócio</Title>
              <Subtitle>Insira atentamente as informações</Subtitle>
            </TitleHeader>
            <Button onClick={onClose}>Voltar</Button>
          </ModalHeader>

          <DadosPessoaisArea>
              <h2>Dados Pessoais</h2>
              <RowForm>
                  <InputText label={"Nome"} placeholder={"Nome"} value={nome} onChange={(e)=> setNome(e.target.value)}/>
                  <InputText label={"Contato"} placeholder={"Telefone"} value={contato} maxLength={15} minLength={11} onChange={(e)=> setContato(e.target.value)}/>
              </RowForm>
              <RowForm>
                  <InputText label={"Login"} placeholder={"Login"} value={login} onChange={(e)=> setLogin(e.target.value)}/>
                  <InputText label={"Senha"} type="password" placeholder={"Senha"} value={senha} onChange={(e)=> setSenha(e.target.value)}/>
                  <InputText 
                      label={"Dia do Vencimento do Pagamento"}
                      placeholder={"Vencimento"}
                      value={diaVencimentoPagamento}
                      onChange={(e)=> setDiaVencimentoPagamento(e.target.value)}
                  />
              </RowForm>
              <RowForm>
                  <InputText label={"E-mail"} placeholder={"E-mail"} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                  <InputText label={"CPF"} placeholder={"CPF"} value={formatCpfCnpj(documento)} onChange={(e)=> setDocumento(e.target.value)}/>
                  <InputText label={"Apelido"} placeholder={"Apelido"} value={apelido} onChange={(e)=> setApelido(e.target.value)}/>
                  
              </RowForm>
          </DadosPessoaisArea>

          <EnderecoArea>
              <h2>Endereço</h2>
              <RowForm>
                  <InputText label={"Rua"} placeholder={"Rua"} value={rua} onChange={(e)=> setRua(e.target.value)}/>
              </RowForm>
              <RowForm>
                  <InputText label={"País"} placeholder={"País"} value={pais} onChange={(e)=> setPais(e.target.value)}/>
                  <InputText label={"Número"} placeholder={"Número"} value={numero} onChange={(e)=> setNumero(e.target.value)}/>
                  <InputText label={"Cidade"} placeholder={"Cidade"} value={cidade} onChange={(e)=> setCidade(e.target.value)}/>
              </RowForm>
              <RowForm>
                  <InputText label={"CEP"} placeholder={"CEP"} value={cep} onChange={(e)=> setCep(e.target.value)}/>
                  <InputText label={"Bairro"} placeholder={"Bairro"} value={bairro} onChange={(e)=> setBairro(e.target.value)}/>
              </RowForm>
          </EnderecoArea>

          <SendAreaButton>
            <Button type="button" onClick={handleClickCriarSocio}>Cadastrar</Button>
          </SendAreaButton>
        </ModalContent>
      )}
    </>
  );
}
