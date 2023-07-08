import { Container, CreateButton, TitleArea } from "./styles";
import { useState } from "react";
import { LoadingTable } from "../LoadingTable";
import { useVeiculos } from "../../hooks/useVeiculos";
import { Dependente } from "./Dependente";
import { useDependentes } from "../../hooks/useDependentes";
import ModalDependente from "./ModaDependente";

interface TablePapeisProps {
    setLoading: (value: boolean) => void;
    socioId: any;
  }

export const TableDependentes: React.FC<TablePapeisProps> = ({ setLoading, socioId }) => {

    const { data: papeisList, isFetching: isPapeisListFetching, } = useDependentes({
        id: socioId,
    });
    const [openModal, setOpenModal] = useState(false);
    const [dependenteEditar, setDependenteEditar] = useState(undefined);
    
    
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleOpenModalCadastro = () => {
        setDependenteEditar(undefined);
        setOpenModal(true);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    return (
        <>
            <Container>
                <TitleArea>
                    <div></div>
                    <CreateButton type="button" onClick={handleOpenModalCadastro}>Cadastrar Dependente</CreateButton>
                </TitleArea>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Inativo/Ativo</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        { isPapeisListFetching ? (
                            <LoadingTable numeroLinhas={4} numeroColunas={3} />
                        ) : <> {
                            papeisList ? papeisList?.map(item => (
                                <Dependente setLoading={setLoading} socioId={socioId} handleOpenModal={handleOpenModal} setDependenteEditar={setDependenteEditar} dependente={item} key={item.id} />
                            )) : <td colSpan={3}>Nenhum Registro Encontrado</td>
                        }</>}
                    </tbody>
                </table>
            </Container>
            <ModalDependente socioId={socioId} setLoading={setLoading} isOpen={openModal} onClose={handleCloseModal} dependente={dependenteEditar} />
        </>
    );
}