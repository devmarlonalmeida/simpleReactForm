import { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import validacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ onSubmit }) {
    const [nome, setNome] = useState("");
    // const [arrNome] = useState("");
    // const nome = arrNome[0];
    // const setNome = arrNome[1];
    //mesma coisa
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const validacoes = useContext(validacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                event.stopPropagation();
                if(possoEnviar())
                    onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
            }}>
            <TextField
                id="nome"
                value={nome}
                name="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => {
                    setNome(event.target.value);
                }} />
            <TextField
                id="sobrenome"
                name="sobrenome"
                value={sobrenome}
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }} />
            <TextField
                id="cpf"
                name="cpf"
                value={cpf}
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth

                error={!erros.cpf.valido}
                helperText={erros.cpf.textoAjuda}

                onBlur={validarCampos}
                onChange={(event) => {
                    setCpf(event.target.value);
                }} />

            <FormControlLabel
                label="Promoções"
                control={<Switch id="promocoes" onChange={(event) => {
                    setPromocoes(event.target.checked);
                }} checked={promocoes} color="primary"></Switch>} />

            <FormControlLabel
                label="Novidades"
                control={<Switch id="novidades" onChange={(event) => {
                    setNovidades(event.target.checked);
                }} checked={novidades} color="primary"></Switch>} />

            <Button type="submit" variant="contained" color="primary">Próximo</Button>

        </form>
    );
}

export default DadosPessoais;