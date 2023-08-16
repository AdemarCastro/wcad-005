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

// MÉTODO DE VALIDAÇÃO DO CPF
function validar_cpf(cpf) {
  const cpfPattern = /^(\d{3}\.){2}\d{3}-\d{2}$/;
  return cpfPattern.test(cpf);
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

// CEP

// POSITIVE
let testCEPPositive = "69022-550";
console.log(`------------- TEST CEP : POSITIVE -------------`);
console.log(`Email utilizado no validador: ${testCEPPositive}`);
console.log(`Resultado: ${validar_cep(testCEPPositive)}\n`);

// NEGATIVE
let testCEPNegative = "69ASD55O"; // Possui letras no CEP (É opcional ter o "-")
console.log(`------------- TEST CEP : NEGATIVE -------------`);
console.log(`Email utilizado no validador: ${testCEPNegative}`);
console.log(`Resultado: ${validar_cep(testCEPNegative)}\n`);

// CPF

// POSITIVE
let testCPFPositive = "022.455.652-44"; // Validador não verifica se o CPF existe, apenas se está no formato pré-definido (XXX.XXX.XXX-XX)
console.log(`------------- TEST CPF : POSITIVE -------------`);
console.log(`Email utilizado no validador: ${testCPFPositive}`);
console.log(`Resultado: ${validar_cpf(testCPFPositive)}\n`);

// NEGATIVE
let testCPFNegative = "02245565244"; // Não está no padrão XXX.XXX.XXX-XX
console.log(`------------- TEST CPF : NEGATIVE -------------`);
console.log(`Email utilizado no validador: ${testCPFNegative}`);
console.log(`Resultado: ${validar_cpf(testCPFNegative)}\n`);

