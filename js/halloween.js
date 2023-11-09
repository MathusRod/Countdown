import Countdown from "./countdown.js";
export default function initHalloween() {
  const dayToHalloween = new Countdown("31 October 2024 00:00:00");
  const diasHalloween = document.querySelector(".halloween .dias");
  const horasHalloween = document.querySelector(".halloween .horas");
  const minutosHalloween = document.querySelector(".halloween .minutos");
  const segundosHalloween = document.querySelector(".halloween .segundos");
  setInterval(() => {
    diasHalloween.innerText = `${dayToHalloween.total.days} Dias`;
    horasHalloween.innerText = `${dayToHalloween.total.hours} Horas`;
    minutosHalloween.innerText = `${dayToHalloween.total.minutes} Min`;
    segundosHalloween.innerText = `${dayToHalloween.total.seconds} Seg`;
  }, 1000);
}