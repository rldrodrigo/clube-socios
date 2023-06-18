import { useCallback, useState } from "react";
import { InputText } from "../../../components/InputText";
import { Switch } from "@mui/material";
import { InputSelect } from "../../../components/InputSelect";
import api from "../../../services/api";
import { toast } from "react-toastify";
import formatCpfCnpj from "../../../utils/formatCpfCnpj";
import { Card, Container, DadosPapelArea, SendAreaButton, SwitchInput } from "./styles";
import { CreateButton, TitleArea } from "../TablePapeis/styles";
import { RowForm } from "../../Socios/CadastrarSocio/styles";


interface EditarPapelProps {
    papel: any;
    setLoading: (value: boolean) => void;
    setPapelEditar: (value: any) => void;
  }

export const EditarPapel: React.FC<EditarPapelProps> = ({ papel, setLoading, setPapelEditar }) => {
    const [nome, setNome] = useState('');

    const handleClickVoltar = () => {
        setPapelEditar(undefined);
    }

    const handleClickSalvar = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.put<any>(
                `/papeis/${papel.id}`,
                {
                    nome: nome ? nome : papel.nome,
                },
            );
            toast.success('Papel Alterado com sucesso');
            setLoading(false);
            setPapelEditar(undefined);
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
      }, [nome, papel.id, papel.nome, setLoading, setPapelEditar]);

    return (
        <Container>
            <TitleArea>
                <h2>Editar Papel</h2>
                <CreateButton type="button"  onClick={handleClickVoltar}>Voltar</CreateButton>
            </TitleArea>
            <Card>
                <DadosPapelArea>
                    <RowForm>
                        <InputText label={"Nome"} placeholder={papel.nome} value={nome} onChange={(e)=> setNome(e.target.value)}/>
                        {/* <SwitchInput>
                            <span>Status</span>
                            <Switch color="success" className="switch" checked={ativo} onChange={handleChange}/>
                        </SwitchInput> */}
                    </RowForm>
                </DadosPapelArea>
                <SendAreaButton>
                    <CreateButton style={{ width: '250px'}} type="button"  onClick={handleClickSalvar}>Salvar</CreateButton>
                </SendAreaButton>
            </Card>
        </Container>
    );
}