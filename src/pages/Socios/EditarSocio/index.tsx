import { useCallback, useState } from "react";
import { CreateButton, TitleArea } from "../TableSocios/styles";
import { Card, Container, DadosPessoaisArea, DependentesArea, EnderecoArea, PlanoArea, RowForm, SendAreaButton, SwitchInput, VeiculosArea } from "./styles";
import { InputText } from "../../../components/InputText";
import { Switch } from "@mui/material";
import { InputSelect } from "../../../components/InputSelect";
import api from "../../../services/api";
import { toast } from "react-toastify";
import formatCpfCnpj from "../../../utils/formatCpfCnpj";
import { TableVeiculos } from "../../../components/TableVeiculos";
import { TableDependentes } from "../../../components/TableDependentes";


interface EditarSocioProps {
    socio: any;
    setLoading: (value: boolean) => void;
    setSocioEditar: (value: any) => void;
  }

export const EditarSocio: React.FC<EditarSocioProps> = ({ socio, setLoading, setSocioEditar }) => {
    const [apelido, setApelido] = useState('');
    const [diaVencimentoPagamento, setDiaVencimentoPagamento] = useState('');
    
    const [plano, setPlano] = useState('');

    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [documento, setDocumento] = useState('');
    const [email, setEmail] = useState('');
    const [ativo, setAtivo] = useState(socio.cliente.ativo);
    const [pais, setPais] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [login, setLogin] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAtivo(!ativo);
    };

    const handleClickVoltar = () => {
        setSocioEditar(undefined);
    }

    const teste =() => {
        console.log('teste');
    }

    const handleClickSalvar = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.put<any>(
                `/socios/${socio.id}`,
                {
                    apelido: apelido ? apelido : socio.apelido,
                    diaVencimentoPagamento: diaVencimentoPagamento ? diaVencimentoPagamento : socio.diaVencimentoPagamento,
                    contato: contato ? contato : socio.contato,
                    nomePlano: plano ? plano : socio.plano.nome,
                    cliente: {
                        nome: nome ? nome : socio.cliente.nome,
                        documento: documento ? documento.replace('.', '').replace('-','') : socio.cliente.documento,
                        login: login ? login : socio.cliente.login,
                        email: email ? email : socio.cliente.email
                    },
                    endereco: {
                        pais: pais ? pais : socio.endereco.pais,
                        cidade: cidade ? cidade : socio.endereco.cidade,
                        cep: cep ? cep : socio.endereco.cep,
                        bairro: bairro ? bairro : socio.endereco.bairro,
                        rua: rua ? rua : socio.endereco.rua,
                        numero: numero ? parseInt(numero, 10) : parseInt(socio.endereco.numero, 10),
                    }
                },
            );
            toast.success('Cliente Alterado com sucesso');
            setLoading(false);
            setSocioEditar(undefined);
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
      }, [
        socio,
        setSocioEditar,
        setLoading,
        apelido,
        diaVencimentoPagamento,
        plano,
        nome,
        documento,
        email,
        pais,
        cidade,
        cep,
        bairro,
        rua,
        numero,
        contato,
        login,
    ]);

    return (
        <Container>
            <TitleArea>
                <h2>Editar Sócio</h2>
                <CreateButton type="button"  onClick={handleClickVoltar}>Voltar</CreateButton>
            </TitleArea>
            <Card>
                <DadosPessoaisArea>
                    <h2>Dados Pessoais</h2>
                    <RowForm>
                        <InputText label={"Nome"} placeholder={socio.cliente.nome} value={nome} onChange={(e)=> setNome(e.target.value)}/>
                        <InputText label={"Contato"} placeholder={socio.contato} value={contato} onChange={(e)=> setContato(e.target.value)}/>
                    </RowForm>
                    <RowForm>
                        <InputText label={"Apelido"} placeholder={socio.apelido} value={apelido} onChange={(e)=> setApelido(e.target.value)}/>
                        <InputText 
                            label={"Dia do Vencimento do Pagamento"}
                            placeholder={socio.diaVencimentoPagamento}
                            value={diaVencimentoPagamento}
                            onChange={(e)=> setDiaVencimentoPagamento(e.target.value)}
                            className="input-text"
                        />
                        <SwitchInput>
                            <span>Status</span>
                            <Switch color="success" className="switch" checked={ativo} onChange={handleChange}/>
                        </SwitchInput>
                    </RowForm>
                    <RowForm>
                        <InputText label={"E-mail"} placeholder={socio.cliente.email} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <InputText label={"CPF"} placeholder={formatCpfCnpj(socio.cliente.documento)} value={formatCpfCnpj(documento)} onChange={(e)=> setDocumento(e.target.value)}/>
                        <InputText label={"Login"} placeholder={socio.cliente.login} value={login} onChange={(e)=> setLogin(e.target.value)}/>
                    </RowForm>
                </DadosPessoaisArea>
                <PlanoArea>
                    <h2>Plano</h2>
                    {/* //<InputText label={"Selecione o Plano"} placeholder={socio.plano.nome} value={plano} onChange={(e)=> setPlano(e.target.value)}/> */}
                    <InputSelect label="Selecione o Plano" options={[{value: '1', label: 'teste'}]}/>
                </PlanoArea>
                <EnderecoArea>
                    <h2>Endereço</h2>
                    <RowForm>
                        <InputText label={"Rua"} placeholder={socio.endereco.rua} value={rua} onChange={(e)=> setRua(e.target.value)}/>
                    </RowForm>
                    <RowForm>
                        <InputText label={"País"} placeholder={socio.endereco.pais} value={pais} onChange={(e)=> setPais(e.target.value)}/>
                        <InputText label={"Número"} placeholder={socio.endereco.numero} value={numero} onChange={(e)=> setNumero(e.target.value)}/>
                        <InputText label={"Cidade"} placeholder={socio.endereco.cidade} value={cidade} onChange={(e)=> setCidade(e.target.value)}/>
                    </RowForm>
                    <RowForm>
                        <InputText label={"CEP"} placeholder={socio.endereco.cep} value={cep} onChange={(e)=> setCep(e.target.value)}/>
                        <InputText label={"Bairro"} placeholder={socio.endereco.bairro} value={bairro} onChange={(e)=> setBairro(e.target.value)}/>
                    </RowForm>
                </EnderecoArea>
                <VeiculosArea>
                    <h2>Veículos</h2>
                    <TableVeiculos setLoading={setLoading} socioId={socio.id} setVeiculoEditar={teste}/>
                </VeiculosArea>

                <DependentesArea>
                    <h2>Dependentes</h2>
                    <TableDependentes setLoading={setLoading} socioId={socio.id} setDependenteEditar={teste} />
                </DependentesArea>
                <SendAreaButton>
                    <CreateButton style={{ width: '250px'}} type="button"  onClick={handleClickSalvar}>Salvar</CreateButton>
                </SendAreaButton>
            </Card>
        </Container>
    );
}