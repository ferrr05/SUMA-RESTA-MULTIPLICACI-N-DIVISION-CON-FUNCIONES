function suma(num1, num2) {
    return num1 + num2;
  }
  
  function resta(num1, num2) {
    return num1 - num2;
  }
  
  function multiplicacion(num1, num2) {
    return num1 * num2;
  }
  
  function division(num1, num2) {
    if (num2 === 0) {
      return "No se puede dividir por cero";
    } else {
      return num1 / num2;
    }
  }
  
  function startCalculator() {
    const num1 = parseInt(prompt("Introduce el primer número"));
    const num2 = parseInt(prompt("Introduce el segundo número"));
  
    console.log(`La suma de ${num1} y ${num2} es: ${suma(num1, num2)}`);
    console.log(`La resta de ${num1} y ${num2} es: ${resta(num1, num2)}`);
    console.log(`La multiplicación de ${num1} y ${num2} es: ${multiplicacion(num1, num2)}`);
    console.log(`La división de ${num1} y ${num2} es: ${division(num1, num2)}`);
  }
  
  startCalculator();
  