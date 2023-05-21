import { Container, CreateButton, TitleArea } from "./styles";
import { useSocios } from "../../../hooks/useSocios";
import { Socio } from "../Socio";
import { LoadingTable } from "../../../components/LoadingTable";
import { useState } from "react";
import Modal from "../CadastrarSocio";

interface TableSociosProps {
    setLoading: (value: boolean) => void;
    setSocioEditar: (value: any) => void;
  }

export const TableSocios: React.FC<TableSociosProps> = ({ setLoading, setSocioEditar }) => {

    const { data: sociosList, isFetching: isSociosListFetching, } = useSocios({});
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
                    <h2>Listagem de Sócios</h2>
                    <CreateButton type="button" onClick={handleOpenModal}>Cadastrar Sócio</CreateButton>
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
            <Modal setLoading={setLoading} isOpen={openModal} onClose={handleCloseModal} />
        </>
    );
}