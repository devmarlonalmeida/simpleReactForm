import { TextField, Button } from "@material-ui/core";
import { useState, useContext } from "react";
import validacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({onSubmit}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validacoes = useContext(validacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar())
                onSubmit({email, senha});
        }}>
            <TextField
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                id="senha"
                name="senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.textoAjuda}
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />

            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosUsuario;