import { Container } from "./styles";
import { useState } from "react";
import { SpinnerLoading } from "../../components/SpinnerLoading";
import { TablePlanos } from "./TablePlanos";
import { EditarPlano } from "./EditarPlano";



export const Planos = () => {

    const [loading, setLoading] = useState(false);

    const [planoEditar, setPlanoEditar] = useState(undefined);

    return (
        <Container>
            { planoEditar ?  (
               <EditarPlano plano={planoEditar} setLoading={setLoading} setPlanoEditar={setPlanoEditar} />
            ) : (
                <TablePlanos setLoading={setLoading} setPlanoEditar={setPlanoEditar} />
            )}
            
            { loading && <SpinnerLoading />}
        </Container>
    );
}