import Countdown from "./countdown.js";
export default function initChristmas() {
  const daysToChristmas = new Countdown("25 December 2023 00:00:00");
  const diasNatal = document.querySelector(".natal .contagem .dias");
  const minutosNatal = document.querySelector(".natal .minutos");
  function updateCountdown() {
    if (window.innerWidth > 500)
      diasNatal.innerText = `${daysToChristmas.total.days} Dias ${daysToChristmas.total.hours} Horas ${daysToChristmas.total.minutes} Min ${daysToChristmas.total.seconds} Seg`;
    else {
      diasNatal.innerText = `${daysToChristmas.total.days} Dias ${daysToChristmas.total.hours} Horas`;
      minutosNatal.innerText =` ${daysToChristmas.total.minutes} Min ${daysToChristmas.total.seconds} Seg`
    }
    
    requestAnimationFrame(updateCountdown);
  }
  updateCountdown();
}
