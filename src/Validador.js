/*
  NOME: ADEMAR ALVES CASTRO FILHO
  WCAD: T2-01
*/

// MÉTODO DE VALIDAÇÃO DO EMAIL
function validar_email(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

