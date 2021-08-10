import { StepLabel, Stepper, Step, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
// import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import { Fragment } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ onSubmit, validacoes }) {
    const[etapaAtual, setEtapaAtual] = useState(0);
    const[dadosColetados, setDadosColetados] = useState({});

    useEffect(() => {
        if(etapaAtual === formularios.length-1)
            onSubmit(dadosColetados);
    });

    const formularios = [
        <DadosUsuario onSubmit={coletarDados} validacoes={validacoes}/>,
        <DadosPessoais onSubmit={coletarDados} validarCPF={validacoes}/>,
        <DadosEntrega onSubmit={coletarDados} validacoes={validacoes}/>,
        <Typography variant="h5">ALO ALO MARCIANO</Typography>
    ]

    function coletarDados(dados){
        setDadosColetados({...dadosColetados, ...dados});
        proximoFormulario();
    }

    function proximoFormulario(){
        setEtapaAtual(etapaAtual+1);
    }

    // function ultimoFormulario(){
    //     setEtapaAtual(etapaAtual-1);
    // }

    return (
        <Fragment>
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel>
                        Login
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Pessoal
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Entrega
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Fim
                    </StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </Fragment>
    );
}

export default FormularioCadastro;