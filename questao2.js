// Criando a função para verificar a senha

function verificarSenha(senha) {

// Criando condição para a largura da senha    
    if (senha.length < 8) {
      return false;
    }
  
// Verificando se a senha contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
  
// Retorna true se todos os critérios forem atingidos, caso contrário, retorna false
    return temMaiuscula && temMinuscula && temNumero;
  }
  