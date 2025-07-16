let expression = "";
const buttons = document.querySelectorAll(".btn");
const resultDiv = document.getElementById("result");
const result = document.getElementById("resultpantalla");


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    expression += btn.dataset.value;
    result.textContent = expression;
  });
});

document.getElementById("equals").addEventListener("click", () => {
  try {
    resultDiv.textContent = eval(expression);
    expression = ""; // reinicia si querés
  } catch {
    resultDiv.textContent = "Error";
  }
});
