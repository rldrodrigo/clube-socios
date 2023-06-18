import { Switch } from "@mui/material";
import { PapelRow } from "./styles";
import { FaPlus, FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useCallback, useState } from "react";

interface PapelProps {
    papel: any;
    setLoading: (value: boolean) => void;
    setPapelEditar: (value: any) => void;
  }

export const Papel: React.FC<PapelProps> = ({ papel, setLoading, setPapelEditar }) => {

    const [status, setStatus] = useState(papel.ativo);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleClickSave();
    };

    const handleClickSave = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.patch<any>(
                `/papeis/${papel.id}`,
                {
                    status: !papel.ativo,
                },
            );
            setStatus(!papel.ativo);
            toast.success('Status Alterado com sucesso');
            setLoading(false);
        } catch (e: any) {
            toast.error(e.response.data.erros[0]);
            setLoading(false);
        }
      }, [papel, setLoading]);

    const handleClickEditar = () => {
        setPapelEditar(papel);
    }


    return (
       <PapelRow>
            <td>{papel.nome}</td>
            <td><Switch color="success" className="switch" checked={ status } onChange={handleChange} /></td>
            <td><button type="button" onClick={handleClickEditar}><FaUserEdit style={{ fontSize: '32px'}}/></button></td>
       </PapelRow>
    );
}