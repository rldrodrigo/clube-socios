import { Container, CreateButton, TitleArea } from "./styles";
import { useState } from "react";


import { Veiculo } from "./Veiculo";
import { LoadingTable } from "../LoadingTable";
import { useVeiculos } from "../../hooks/useVeiculos";
import ModalVeiculo from "./ModalVeiculo";

interface TablePapeisProps {
    setLoading: (value: boolean) => void;
    socioId: any;
  }

export const TableVeiculos: React.FC<TablePapeisProps> = ({ setLoading, socioId }) => {

    const { data: papeisList, isFetching: isPapeisListFetching, } = useVeiculos({
        id: socioId,
    });
    const [openModal, setOpenModal] = useState(false);
    const [veiculoEditar, setVeiculoEditar] = useState(undefined);
    
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleOpenModalCadastro = () => {
        setVeiculoEditar(undefined);
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
                    <CreateButton type="button" onClick={handleOpenModalCadastro}>Cadastrar Veículo</CreateButton>
                </TitleArea>
                <table>
                    <thead>
                        <tr>
                            <th>Placa</th>
                            <th>Inativo/Ativo</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        { isPapeisListFetching ? (
                            <LoadingTable numeroLinhas={4} numeroColunas={3} />
                        ) : <>
                            {
                                papeisList ? papeisList.map(item => (
                                    <Veiculo setLoading={setLoading} socioId={socioId} handleOpenModal={handleOpenModal} setVeiculoEditar={setVeiculoEditar} veiculo={item} key={item.id} />
                                )) : <td colSpan={3}>Nenhum Registro Encontrado</td>
                            }
                        </>}
                    </tbody>
                </table>
            </Container>
            <ModalVeiculo setLoading={setLoading} isOpen={openModal} onClose={handleCloseModal} socioId={socioId} veiculo={veiculoEditar}/>
        </>
    );
}