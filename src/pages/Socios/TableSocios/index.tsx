import { Skeleton } from "@mui/material";
import { Container, CreateButton, TitleArea } from "./styles";
import { SpinnerLoading } from "../../../components/SpinnerLoading";
import { useSocios } from "../../../hooks/useSocios";
import { Socio } from "../Socio";

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
                        <th>Documento</th>
                        <th>Plano</th>
                        <th>Valor Mensalidade</th>
                        <th>Inativo/Ativo</th>
                        <th>Endereço</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    { !isSociosListFetching && sociosList ? sociosList.map(item => (
                        <Socio setLoading={setLoading} setSocioEditar={setSocioEditar} socio={item} key={item.id} />
                    )): (
                        <>
                            <tr>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                            </tr>
                            <tr>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                            </tr>
                            <tr>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                                <td><Skeleton style={{ margin: '5px' }}/></td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </Container>
    );
}