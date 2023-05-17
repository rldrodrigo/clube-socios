import { Skeleton } from "@mui/material";
import { Container, CreateButton, TitleArea } from "./styles";
import { SpinnerLoading } from "../../../components/SpinnerLoading";
import { useSocios } from "../../../hooks/useSocios";
import { Socio } from "../Socio";
import { LoadingTable } from "../../../components/LoadingTable";

interface TableSociosProps {
    setLoading: (value: boolean) => void;
    setSocioEditar: (value: any) => void;
  }

export const TableSocios: React.FC<TableSociosProps> = ({ setLoading, setSocioEditar }) => {

    const { data: sociosList, isFetching: isSociosListFetching, } = useSocios({});
    
    return (
        <Container>
            <TitleArea>
                <h2>Listagem de Sócios</h2>
                <CreateButton type="button">Cadastrar Sócio</CreateButton>
            </TitleArea>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Estado</th>
                        <th>Inativo/Ativo</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    { !isSociosListFetching && sociosList ? sociosList.map(item => (
                        <Socio setLoading={setLoading} setSocioEditar={setSocioEditar} socio={item} key={item.id} />
                    )): (
                        <LoadingTable numeroLinhas={7} numeroColunas={4} />
                    )}
                </tbody>
            </table>
        </Container>
    );
}