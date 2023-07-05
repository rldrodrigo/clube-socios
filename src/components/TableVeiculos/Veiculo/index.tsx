import { Switch } from "@mui/material";
import { PapelRow } from "./styles";
import { FaEdit, FaPlus, FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useCallback, useState } from "react";

interface PapelProps {
    veiculo: any;
    socioId: any;
    setLoading: (value: boolean) => void;
    setPapelEditar: (value: any) => void;
  }

export const Veiculo: React.FC<PapelProps> = ({ veiculo, socioId, setLoading, setPapelEditar }) => {

    const [status, setStatus] = useState(veiculo.ativo);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleClickSave();
    };

    const handleClickSave = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.patch<any>(
                `/socios/${socioId}/veiculos/${veiculo.id}`,
                {
                    status: !veiculo.ativo,
                },
            );
            setStatus(!veiculo.ativo);
            toast.success('Status do Veículo Alterado com sucesso');
            setLoading(false);
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
      }, [veiculo, setLoading, socioId]);

    const handleClickEditar = () => {
        setPapelEditar(veiculo);
    }


    return (
       <PapelRow>
            <td>{veiculo.placa}</td>
            <td><Switch color="success" className="switch" checked={ status } onChange={handleChange} /></td>
            <td><button type="button" onClick={handleClickEditar}><FaEdit style={{ fontSize: '32px'}}/></button></td>
       </PapelRow>
    );
}