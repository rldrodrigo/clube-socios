import { Switch } from "@mui/material";
import formatCpfCnpj from "../../../utils/formatCpfCnpj";
import { SocioRow } from "./styles";
import formatCurrencyValue from "../../../utils/formatCurrencyValue";
import { FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useCallback, useState } from "react";

interface SocioProps {
    socio: any;
    setLoading: (value: boolean) => void;
    setSocioEditar: (value: any) => void;
  }

export const Socio: React.FC<SocioProps> = ({ socio, setLoading, setSocioEditar }) => {

    const [status, setStatus] = useState(socio.cliente.ativo);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleClickSave();
    };

    const handleClickSave = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.patch<any>(
                `/socios/${socio.id}`,
                {
                    status: !socio.cliente.ativo,
                },
            );
            setStatus(!socio.cliente.ativo);
            toast.success('Status Alterado com sucesso');
            setLoading(false);
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
      }, [socio, setLoading]);

    const handleClickEditar = () => {
        setSocioEditar(socio);
    }


    return (
       <SocioRow>
            <td>{socio.cliente.nome}</td>
            <td>{formatCpfCnpj(socio.cliente.documento)}</td>
            <td>{socio.plano.nome}</td>
            <td>{formatCurrencyValue(socio.plano.valorMensalidade)}</td>
            <td><Switch color="success" className="switch" checked={ status } onChange={handleChange} /></td>
            <td>{`${ socio.endereco.rua } ${socio.endereco.numero}, ${socio.endereco.bairro}, ${socio.endereco.cidade} `}</td>
            <td><button type="button" onClick={handleClickEditar}><FaUserEdit style={{ fontSize: '30px'}}/></button></td>
       </SocioRow>
    );
}