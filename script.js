const value=document.getElementById("value");
const green=document.getElementById("green");
const blue=document.getElementById("blue");
const red=document.getElementById("red");
const palet=document.querySelector(".paleta");

red.addEventListener("input",()=>{
  acao()
})
green.addEventListener("input",()=>{
  acao()
})
blue.addEventListener("input",()=>{
  acao()
})

function acao() {
  palet.style.background=`RGB(${red.value},${green.value},${blue.value})`
  value.value=`RGB(${red.value},${green.value},${blue.value})`;
}

acao()
