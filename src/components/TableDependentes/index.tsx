import { Container, CreateButton, TitleArea } from "./styles";
import { useState } from "react";
import { LoadingTable } from "../LoadingTable";
import { useVeiculos } from "../../hooks/useVeiculos";
import { Dependente } from "./Dependente";
import { useDependentes } from "../../hooks/useDependentes";

interface TablePapeisProps {
    setLoading: (value: boolean) => void;
    socioId: any;
    setDependenteEditar: (value: any) => void;
  }

export const TableDependentes: React.FC<TablePapeisProps> = ({ setLoading, setDependenteEditar, socioId }) => {

    const { data: papeisList, isFetching: isPapeisListFetching, } = useDependentes({
        id: socioId,
    });
    const [openModal, setOpenModal] = useState(false);
    
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    return (
        <>
            <Container>
                <TitleArea>
                    <div></div>
                    <CreateButton type="button" onClick={handleOpenModal}>Cadastrar Dependente</CreateButton>
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
                        { !isPapeisListFetching && papeisList ? papeisList.map(item => (
                            <Dependente setLoading={setLoading} socioId={socioId} setDependenteEditar={setDependenteEditar} dependente={item} key={item.id} />
                        )): (
                            <LoadingTable numeroLinhas={4} numeroColunas={3} />
                        )}
                    </tbody>
                </table>
            </Container>
            {/* <CadastrarPapel setLoading={setLoading} isOpen={openModal} onClose={handleCloseModal} /> */}
        </>
    );
}