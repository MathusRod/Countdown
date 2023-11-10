import Countdown from "./countdown.js";
export default function initNewYear() {
  const daysToNewYear = new Countdown("1 January 2024 00:00:00");
  const diasAnoNovo = document.querySelector(".ano-novo .dias");
  const minutosAnoNovo = document.querySelector(".ano-novo .minutos");
  function updateCountdown() {
    if (window.innerWidth > 500)
      diasAnoNovo.innerText = `${daysToNewYear.total.days} Dias ${daysToNewYear.total.hours} Horas ${daysToNewYear.total.minutes} Min ${daysToNewYear.total.seconds} Seg`;
    else {
      diasAnoNovo.innerText = `${daysToNewYear.total.days} Dias ${daysToNewYear.total.hours} Horas`;
      minutosAnoNovo.innerText = ` ${daysToNewYear.total.minutes} Min ${daysToNewYear.total.seconds} Seg`;
    }
    requestAnimationFrame(updateCountdown);
  }
  updateCountdown();
}
