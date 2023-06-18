import { Container, CreateButton, TitleArea } from "./styles";
import { LoadingTable } from "../../../components/LoadingTable";
import { useState } from "react";
import { usePlanos } from "../../../hooks/usePlanos";
import { Plano } from "../Plano";
import CadastraPlano from "../CadastrarPlano";

interface TablePlanosProps {
    setLoading: (value: boolean) => void;
    setPlanoEditar: (value: any) => void;
  }

export const TablePlanos: React.FC<TablePlanosProps> = ({ setLoading, setPlanoEditar }) => {

    const { data: planosList, isFetching: isPlanosListFetching, } = usePlanos({});
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
                    <h2>Listagem de Planos</h2>
                    <CreateButton type="button" onClick={handleOpenModal}>Cadastrar Plano</CreateButton>
                </TitleArea>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Modalidade</th>
                            <th>Tipo de Recorrência</th>
                            <th>Valor Mensalidade</th>
                            <th>Inativo/Ativo</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        { !isPlanosListFetching && planosList ? planosList.map(item => (
                            <Plano setLoading={setLoading} setPlanoEditar={setPlanoEditar} plano={item} key={item.id} />
                        )): (
                            <LoadingTable numeroLinhas={7} numeroColunas={4} />
                        )}
                    </tbody>
                </table>
            </Container>
            <CadastraPlano setLoading={setLoading} isOpen={openModal} onClose={handleCloseModal} />
        </>
    );
}