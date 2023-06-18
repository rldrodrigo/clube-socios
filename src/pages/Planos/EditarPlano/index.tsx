import { useCallback, useState } from "react";
import { Card, Container, DadosPessoaisArea, RowForm, SendAreaButton } from "./styles";
import { InputText } from "../../../components/InputText";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { CreateButton, TitleArea } from "../TablePlanos/styles";


interface EditarPlanoProps {
    plano: any;
    setLoading: (value: boolean) => void;
    setPlanoEditar: (value: any) => void;
  }

export const EditarPlano: React.FC<EditarPlanoProps> = ({ plano, setLoading, setPlanoEditar }) => {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [modalidade, setModalidade] = useState('');
    const [tipoRecorrencia, setTipoRecorrencia] = useState('');
    const [valorMensalidade, setValorMensalidade] = useState('');


    const handleClickVoltar = () => {
        setPlanoEditar(undefined);
    }

    const handleClickSalvar = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.put<any>(
                `/planos/${plano.id}`,
                {
                    nome: nome ? nome : plano.nome,
                    descricao : descricao ? descricao : plano.descricao,
                    modalidade : modalidade ? modalidade : plano.modalidade,
                    tipoRecorrencia : tipoRecorrencia ? tipoRecorrencia : plano.tipoRecorrencia ,
                    valorMensalidade : valorMensalidade ? parseFloat(valorMensalidade) : parseFloat(plano.valorMensalidade),
                },
            );
            toast.success('Plano Alterado com sucesso');
            setLoading(false);
            setPlanoEditar(undefined);
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
      }, [nome, descricao, plano, modalidade, tipoRecorrencia, valorMensalidade, setLoading, setPlanoEditar]);

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
                        <InputText label={"Nome"} placeholder={plano.nome} value={nome} onChange={(e)=> setNome(e.target.value)}/>
                        <InputText label={"Descrição"} placeholder={plano.descricao} value={descricao} onChange={(e)=> setDescricao(e.target.value)}/>
                    </RowForm>
                    <RowForm>
                        <InputText label={"Modalidade"} placeholder={plano.modalidade} value={modalidade} onChange={(e)=> setModalidade(e.target.value)}/>
                        <InputText label={"Tipo de Recorrência"} placeholder={plano.tipoRecorrencia} value={tipoRecorrencia} onChange={(e)=> setTipoRecorrencia(e.target.value)} />
                        <InputText type="number" label={"Valor Mensalidade"} placeholder={plano.valorMensalidade} value={valorMensalidade} onChange={(e)=> setValorMensalidade(e.target.value)}/>
                    </RowForm>
                </DadosPessoaisArea>
                <SendAreaButton>
                    <CreateButton style={{ width: '250px'}} type="button"  onClick={handleClickSalvar}>Salvar</CreateButton>
                </SendAreaButton>
            </Card>
        </Container>
    );
}