function calcularFatorial(numero) {
    // Verifica se o número é 0 ou 1, nesse caso o fatorial é 1
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    // Inicializa o fatorial como o próprio número
    let fatorial = numero;
  
    // Calcula o fatorial
    for (let i = numero - 1; i >= 1; i--) {
      fatorial *= i;
    }
  
    return fatorial;
  }
 
  for (let i = 1; i <= 10; i++) {
    const fatorial = calcularFatorial(i);
    console.log(`O fatorial de ${i} é ${fatorial}`);
  }
  