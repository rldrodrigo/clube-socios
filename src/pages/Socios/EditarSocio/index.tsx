import { useState } from "react";
import { CreateButton, TitleArea } from "../TableSocios/styles";
import { Container } from "../styles";
import { Card, InputArea } from "./styles";


interface EditarSocioProps {
    socio: any;
    setLoading: (value: boolean) => void;
    setSocioEditar: (value: any) => void;
  }

export const EditarSocio: React.FC<EditarSocioProps> = ({ socio, setLoading, setSocioEditar }) => {

    const handleClickVoltar = () => {
        setSocioEditar(undefined);
    }

    const [nome, setNome] = useState('');

    return (
        <Container>
            <TitleArea>
                <h2>Editar Sócio</h2>
                <CreateButton type="button"  onClick={handleClickVoltar}>Voltar</CreateButton>
            </TitleArea>
            <Card>
                <InputArea>
                    <span>Nome</span>
                    <input type="text" value={nome} placeholder={socio.cliente.nome} />
                </InputArea>
            </Card>
        </Container>
    );
}