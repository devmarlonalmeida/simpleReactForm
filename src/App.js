import './assets/App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto'
import { validarCPF, validarSenha } from './models/cadastro';
import validacoesCadastro from './context/ValidacoesCadastro';

function App() {

  function onSubmit(dados) {
    console.log(dados);
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Bom dia familia</Typography>
      <validacoesCadastro.Provider value={{cpf: validarCPF, senha:validarSenha}}>
        <FormularioCadastro onSubmit={onSubmit} />
      </validacoesCadastro.Provider>
    </Container>
  );
}

export default App;
