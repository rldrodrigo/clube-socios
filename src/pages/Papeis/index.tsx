import { Container } from "./styles";
import { useState } from "react";
import { SpinnerLoading } from "../../components/SpinnerLoading";



export const Papeis = () => {

    const [loading, setLoading] = useState(false);

    const [socioEditar, setSocioEditar] = useState(undefined);

    return (
        <Container>
            { socioEditar ?  (
                <div> Papeis</div>
            ) : (
                <div> Papeis</div>
            )}
            
            { loading && <SpinnerLoading />}
        </Container>
    );
}