import { Switch } from "@mui/material";
import { PapelRow } from "./styles";
import { FaEdit, FaPlus, FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useCallback, useState } from "react";

interface PapelProps {
    dependente: any;
    socioId: any;
    setLoading: (value: boolean) => void;
    setDependenteEditar: (value: any) => void;
    handleOpenModal: () => void;
  }

export const Dependente: React.FC<PapelProps> = ({ dependente, socioId, setLoading, setDependenteEditar, handleOpenModal }) => {

    const [status, setStatus] = useState(dependente.cliente.ativo);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleClickSave();
    };

    const handleClickSave = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.patch<any>(
                `/socios/${socioId}/dependentes/${dependente.id}`,
                {
                    status: !dependente.cliente.ativo,
                },
            );
            setStatus(!dependente.cliente.ativo);
            toast.success('Status do Dependente Alterado com sucesso');
            setLoading(false);
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
      }, [dependente, setLoading, socioId]);

    const handleClickEditar = () => {
        setDependenteEditar(dependente);
        handleOpenModal();
    }


    return (
       <PapelRow>
            <td>{dependente.cliente.nome}</td>
            <td><Switch color="success" className="switch" checked={ status } onChange={handleChange} /></td>
            <td><button type="button" onClick={handleClickEditar}><FaEdit style={{ fontSize: '32px'}}/></button></td>
       </PapelRow>
    );
}