// Criando a função para verificar se o numero é primo ou não 
function verificarPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  // Criando a função para listar os numeros primos ate o número 1000
  function listarNumerosPrimos() {
    const primos = [];
  
    for (let i = 1; i <= 1000; i++) {
      if (verificarPrimo(i)) {
        primos.push(i);
      }
    }
  
    return primos;
  }
 
  // Comandos para executar o código no console
  
  const primosEntre1e1000 = listarNumerosPrimos();
  console.log(primosEntre1e1000);