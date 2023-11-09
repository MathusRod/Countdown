import Countdown from "./countdown.js";
export default function initNewYear() {
  const daysToNewYear = new Countdown("1 January 2024 00:00:00");
  const diasAnoNovo = document.querySelector(".ano-novo .dias");
  const horasAnoNovo = document.querySelector(".ano-novo .horas");
  const minutosAnoNovo = document.querySelector(".ano-novo .minutos");
  const segundosAnoNovo = document.querySelector(".ano-novo .segundos");
  setInterval(() => {
    diasAnoNovo.innerText = `${daysToNewYear.total.days} Dias`;
    horasAnoNovo.innerText = `${daysToNewYear.total.hours} Horas`;
    minutosAnoNovo.innerText = `${daysToNewYear.total.minutes} Min`;
    segundosAnoNovo.innerText = `${daysToNewYear.total.seconds} Seg`;
  }, 1000);
}