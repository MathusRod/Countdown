import Countdown from "./countdown.js";
export default function initChristmas() {
  const daysToChristmas = new Countdown("25 December 2023 00:00:00");
  const diasNatal = document.querySelector(".natal .contagem .dias");
  const horasNatal = document.querySelector(".natal .contagem .horas");
  const minutosNatal = document.querySelector(".natal .contagem .minutos");
  const segundosNatal = document.querySelector(".natal .contagem .segundos");
  setInterval(() => {
    diasNatal.innerText = `${daysToChristmas.total.days} Dias`;
    horasNatal.innerText = `${daysToChristmas.total.hours} Horas`;
    minutosNatal.innerText = `${daysToChristmas.total.minutes} Min`;
    segundosNatal.innerText = `${daysToChristmas.total.seconds} Seg`;
  }, 1000);
}