/*
  NOME: ADEMAR ALVES CASTRO FILHO
  WCAD: T2-01
*/

// MÉTODO DE VALIDAÇÃO DO EMAIL
function validar_email(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// MÉTODO DE VALIDAÇÃO DO CEP
function validar_cep(cep) {
  const cepPattern = /^\d{5}-?\d{3}$/;
  return cepPattern.test(cep);
}

// TESTS DOS MÉTODOS DE VALIDAÇÃO

// EMAIL

// POSITIVE
let testEmailPositive = "ademar.castro@outlook.com";
console.log(`------------- TEST EMAIL : POSITIVE -------------`);
console.log(`Email utilizado no validador: ${testEmailPositive}`);
console.log(`Resultado: ${validar_email(testEmailPositive)}\n`);

// NEGATIVE
let testEmailNegative = "ademar.castrooutlookcom"; // Não possui o "@" e nem o "." antes do "com"
console.log(`------------- TEST EMAIL : NEGATIVE -------------`);
console.log(`Email utilizado no validador: ${testEmailNegative}`);
console.log(`Resultado: ${validar_email(testEmailNegative)}\n`);