function validarCPF(cpf) {
    if (cpf.length !== 11)
      return { valido: false, textoAjuda: "CPF deve ter 11 dígitos!" }
    else
      return { valido: true, textoAjuda: "" }
  }

  function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72)
      return { valido: false, textoAjuda: "Senha deve ter deve ter entre 4 e 72 caracteres!"}
    else
      return { valido: true, textoAjuda: "" }
  }

  export {validarCPF, validarSenha}