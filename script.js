let expression = "";
const buttons = document.querySelectorAll(".btn");
const resultDiv = document.getElementById("result");
const result = document.getElementById("resultpantalla");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    if (value === "delet") {
      expression = expression.slice(0, -1);
    } else if (value === "") {
      expression += "0.5"; // ./.
    } else if (value === "%") {
      expression += "/100"; // convierte % a valor decimal
    } else {
      expression += value;
    }

    result.textContent = expression;
  });
});

document.getElementById("equals").addEventListener("click", () => {
  try {
    const evalResult = eval(expression);
    resultDiv.textContent = evalResult;
    expression = evalResult.toString(); // continuar operando con el resultado
    result.textContent = expression;
  } catch {
    resultDiv.textContent = "Error";
    expression = "";
    result.textContent = "";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  expression = "";
  result.textContent = "";
  resultDiv.textContent = "0";
});
