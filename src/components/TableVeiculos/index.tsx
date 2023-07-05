import { Container, CreateButton, TitleArea } from "./styles";
import { useState } from "react";


import { Veiculo } from "./Veiculo";
import { LoadingTable } from "../LoadingTable";
import { useVeiculos } from "../../hooks/useVeiculos";

interface TablePapeisProps {
    setLoading: (value: boolean) => void;
    socioId: any;
    setVeiculoEditar: (value: any) => void;
  }

export const TableVeiculos: React.FC<TablePapeisProps> = ({ setLoading, setVeiculoEditar, socioId }) => {

    const { data: papeisList, isFetching: isPapeisListFetching, } = useVeiculos({
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
                    <CreateButton type="button" onClick={handleOpenModal}>Cadastrar Veículo</CreateButton>
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
                        { !isPapeisListFetching && papeisList ? papeisList.map(item => (
                            <Veiculo setLoading={setLoading} socioId={socioId} setPapelEditar={setVeiculoEditar} veiculo={item} key={item.id} />
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