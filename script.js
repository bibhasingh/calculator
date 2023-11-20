"use strict";
let expr = "";
for (let i = 0; i < 14; i++) {
  document.querySelector(`.box${i}`).addEventListener("click", getNum);
}
document.querySelector(".boxCalc").addEventListener("click", calculate);
document.querySelector(".clear").addEventListener("click", clear);

function getNum() {
  const clickedClass = this.className;
  const usedClass = clickedClass.split(" ")[0];
  const textValue = document.querySelector(`.${usedClass}`).textContent;
  expr = expr + textValue;
  document.querySelector(".textbox").value = expr;
  document.querySelector(".textbox").style.textAlign = "right";
  document.querySelector(".textbox").style.fontSize = "50px";
  console.log(expr);
}

function calculate() {
  const result = eval(expr);
  document.querySelector(".textbox").value = result;
  document.querySelector(".textbox").style.textAlign = "right";
  document.querySelector(".textbox").style.fontSize = "50px";
  expr = result;
  console.log(result);
}

function clear() {
  expr = "";
  document.querySelector(".textbox").value = expr;
}
