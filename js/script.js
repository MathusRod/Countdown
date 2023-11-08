import Countdown from "./countdown.js";

const daysToChristmas = new Countdown("25 December 2023 00:00:00");
const daysToNewYear = new Countdown("1 January 2024 00:00:00");


const diasNatal = document.querySelector(".natal .dias");
const horasNatal = document.querySelector(".natal .horas");
const minutosNatal = document.querySelector(".natal .minutos");
const segundosNatal = document.querySelector(".natal .segundos");

setInterval(() => {
  diasNatal.innerText = `${daysToChristmas.total.days} Dias`;
  horasNatal.innerText = `${daysToChristmas.total.hours} Horas`;
  minutosNatal.innerText = `${daysToChristmas.total.minutes} Min`;
  segundosNatal.innerText = `${daysToChristmas.total.seconds} Seg`;
}, 1000);

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