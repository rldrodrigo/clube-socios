import { Container, CreateButton, TitleArea } from "./styles";
import { useSocios } from "../../hooks/useSocios";
import { FaUserEdit } from "react-icons/fa";
import { Skeleton } from "@mui/material";


export const Socios = () => {
    const nomesMockados = [   
        {
            name: 'Nome teste',
            document: '000.000.000-22',
            status: 'Ativo'
        },
        {
            name: 'Nome teste',
            document: '000.000.000-22',
            status: 'Ativo'
        },
        {
            name: 'Nome teste',
            document: '000.000.000-22',
            status: 'Ativo'
        },
        {
            name: 'Nome teste',
            document: '000.000.000-22',
            status: 'Ativo'
        },
        {
            name: 'Nome teste',
            document: '000.000.000-22',
            status: 'Ativo'
        },
    ];

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
                        <th>Status</th>
                        <th>Vencimento do Pagamento</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    { !isSociosListFetching ? nomesMockados.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.document}</td>
                            <td>{item.status}</td>
                            <td>{0}</td>
                            <td><button type="button"><FaUserEdit /></button></td>
                        </tr>
                    )): (
                        <>
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