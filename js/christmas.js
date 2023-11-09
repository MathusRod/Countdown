import Countdown from "./countdown.js";
export default function initChristmas() {
  const daysToChristmas = new Countdown("25 December 2023 00:00:00");
  const diasNatal = document.querySelector(".natal .contagem .dias");
  setInterval(() => {
    diasNatal.innerText = `${daysToChristmas.total.days} Dias ${daysToChristmas.total.hours} Horas ${daysToChristmas.total.minutes} Min ${daysToChristmas.total.seconds} Seg`;
  }, 1000);
}
