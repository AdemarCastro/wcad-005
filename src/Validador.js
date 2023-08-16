function validar_email(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validar_cep(cep) {
  const cepPattern = /^\d{5}-?\d{3}$/;
  return cepPattern.test(cep);
}

function validar_cpf(cpf) {
  const cpfPattern = /^(\d{3}\.){2}\d{3}-\d{2}$/;
  return cpfPattern.test(cpf);
}

function validar_telefone(telefone) {
  const telefonePattern = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/;
  return telefonePattern.test(telefone);
}

// TESTES DOS MÉTODOS DE VALIDAÇÃO

// EMAIL

// POSITIVE
let testeEmailPositive = "ademar.castro@outlook.com";
console.log(`------------- TESTE EMAIL : POSITIVE -------------`);
console.log(`Email utilizado no validador: ${testeEmailPositive}`);
console.log(`Resultado: ${validar_email(testeEmailPositive)}\n`);

// NEGATIVE
let testeEmailNegative = "ademar.castrooutlookcom"; // Não possui o "@" e nem o "." antes do "com"
console.log(`------------- TESTE EMAIL : NEGATIVE -------------`);
console.log(`Email utilizado no validador: ${testeEmailNegative}`);
console.log(`Resultado: ${validar_email(testeEmailNegative)}\n`);

// CEP

// POSITIVE
let testeCEPPositive = "69022-550";
console.log(`------------- TESTE CEP : POSITIVE -------------`);
console.log(`Email utilizado no validador: ${testeCEPPositive}`);
console.log(`Resultado: ${validar_cep(testeCEPPositive)}\n`);

// NEGATIVE
let testeCEPNegative = "69022550"; // Não possui o "-"
console.log(`------------- TESTE CEP : NEGATIVE -------------`);
console.log(`Email utilizado no validador: ${testeCEPNegative}`);
console.log(`Resultado: ${validar_cep(testeCEPNegative)}\n`);
