import Countdown from "./countdown.js";
export default function initHalloween() {
  const dayToHalloween = new Countdown("31 October 2024 00:00:00");
  const diasHalloween = document.querySelector(".halloween .dias");
  const minutosHalloween = document.querySelector(".halloween .minutos");
  function updateCountdown() {
    if (window.innerWidth > 500)
      diasHalloween.innerText = `${dayToHalloween.total.days} Dias ${dayToHalloween.total.hours} Horas ${dayToHalloween.total.minutes} Min ${dayToHalloween.total.seconds} Seg`;
    else {
      diasHalloween.innerText = `${dayToHalloween.total.days} Dias ${dayToHalloween.total.hours} Horas`;
      minutosHalloween.innerText = ` ${dayToHalloween.total.minutes} Min ${dayToHalloween.total.seconds} Seg`;
    }
    requestAnimationFrame(updateCountdown);
  }

  updateCountdown();
}
