import { Switch } from "@mui/material";
import { PlanoRow } from "./styles";
import { FaPlus, FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useCallback, useState } from "react";
import formatCurrencyValue from "../../../utils/formatCurrencyValue";

interface PlanoProps {
    plano: any;
    setLoading: (value: boolean) => void;
    setPlanoEditar: (value: any) => void;
  }

export const Plano: React.FC<PlanoProps> = ({ plano, setLoading, setPlanoEditar }) => {

    const [status, setStatus] = useState(plano.ativo);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleClickSave();
    };

    const handleClickSave = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.patch<any>(
                `/planos/${plano.id}`,
                {
                    status: !plano.ativo,
                },
            );
            setStatus(!plano.ativo);
            toast.success('Status Alterado com sucesso');
            setLoading(false);
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
      }, [plano, setLoading]);

    const handleClickEditar = () => {
        setPlanoEditar(plano);
    }


    return (
       <PlanoRow>
            <td>{plano.nome}</td>
            <td>{plano.descricao}</td>
            <td>{plano.modalidade}</td>
            <td>{plano.tipoRecorrencia}</td>
            <td>{formatCurrencyValue(plano.valorMensalidade)}</td>
            <td><Switch color="success" className="switch" checked={ status } onChange={handleChange} /></td>
            <td><button type="button" onClick={handleClickEditar}><FaUserEdit style={{ fontSize: '32px'}}/></button></td>
       </PlanoRow>
    );
}