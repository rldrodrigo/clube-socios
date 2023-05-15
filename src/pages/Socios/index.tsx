import { Container } from "./styles";
import { useState } from "react";
import { SpinnerLoading } from "../../components/SpinnerLoading";
import { TableSocios } from "./TableSocios";
import { EditarSocio } from "./EditarSocio";


export const Socios = () => {

    const [loading, setLoading] = useState(false);

    const [socioEditar, setSocioEditar] = useState(undefined);

    return (
        <Container>
            { socioEditar ?  (
                <EditarSocio socio={socioEditar} setLoading={setLoading} setSocioEditar={setSocioEditar} />
            ) : (
                <TableSocios setLoading={setLoading} setSocioEditar={setSocioEditar} />
            )}
            
            { loading && <SpinnerLoading />}
        </Container>
    );
}