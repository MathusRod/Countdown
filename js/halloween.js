import Countdown from "./countdown.js";
export default function initHalloween() {
  const dayToHalloween = new Countdown("31 October 2024 00:00:00");
  const diasHalloween = document.querySelector(".halloween .dias");
  setInterval(() => {
    diasHalloween.innerText = `${dayToHalloween.total.days} Dias ${dayToHalloween.total.hours} Horas ${dayToHalloween.total.minutes} Min ${dayToHalloween.total.seconds} Seg`;
  }, 1000);
}