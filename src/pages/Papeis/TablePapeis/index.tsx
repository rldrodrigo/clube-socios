import { Container, CreateButton, TitleArea } from "./styles";
import { LoadingTable } from "../../../components/LoadingTable";
import { useState } from "react";
import { usePapeis } from "../../../hooks/usePapeis";
import { Papel } from "../Papel";
import CadastrarPapel from "../CadastrarPapel";

interface TablePapeisProps {
    setLoading: (value: boolean) => void;
    setPapelEditar: (value: any) => void;
  }

export const TablePapeis: React.FC<TablePapeisProps> = ({ setLoading, setPapelEditar }) => {

    const { data: papeisList, isFetching: isPapeisListFetching, } = usePapeis({});
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
                    <h2>Listagem de Papéis</h2>
                    <CreateButton type="button" onClick={handleOpenModal}>Cadastrar Papel</CreateButton>
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
                            <Papel setLoading={setLoading} setPapelEditar={setPapelEditar} papel={item} key={item.id} />
                        )): (
                            <LoadingTable numeroLinhas={7} numeroColunas={3} />
                        )}
                    </tbody>
                </table>
            </Container>
            <CadastrarPapel setLoading={setLoading} isOpen={openModal} onClose={handleCloseModal} />
        </>
    );
}