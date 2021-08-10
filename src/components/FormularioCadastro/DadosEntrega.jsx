import { TextField, Button } from "@material-ui/core";
import { useState } from "react"

function DadosEntrega({onSubmit}) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                onSubmit({cep, endereco, numero, estado, cidade});
            }
        }>
            <TextField
                id="cep"
                name="cep"
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="endereco"
                name="endereco"
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="numero"
                name="numero"
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
                label="Número"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="estado"
                name="estado"
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value);
                }}
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="cidade"
                name="cidade"
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value);
                }}
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default DadosEntrega;