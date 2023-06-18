import { Container } from "./styles";
import { useState } from "react";
import { SpinnerLoading } from "../../components/SpinnerLoading";
import { TablePapeis } from "./TablePapeis";
import { EditarPapel } from "./EditarPapel";



export const Papeis = () => {

    const [loading, setLoading] = useState(false);

    const [papelEditar, setPapelEditar] = useState(undefined);

    return (
        <Container>
            { papelEditar ?  (
                <EditarPapel papel={papelEditar} setLoading={setLoading} setPapelEditar={setPapelEditar} />
            ) : (
                <TablePapeis setLoading={setLoading} setPapelEditar={setPapelEditar} />
            )}
            
            { loading && <SpinnerLoading />}
        </Container>
    );
}