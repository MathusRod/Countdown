import initChristmas from "./christmas.js";
import initNewYear from "./newyear.js";
import initHalloween from "./halloween.js";

export default function initDivCreator() {
  const btn = document.querySelector(".btn");
  const option = document.querySelector("#seletor");
  btn.addEventListener("click", handleClick);
  function handleClick(event) {
    event.preventDefault();
    fetchEvento("./eventos.json");
  }
  async function fetchEvento(url) {
    const eventoReponse = await fetch(url);
    const eventoJSON = await eventoReponse.json();
    const divMain = document.querySelector(".main");

    const existingEvento = divMain.querySelector(".evento");
    if (existingEvento) {
      divMain.removeChild(existingEvento);
    }
    
    switch (option.value) {
      case "0":
        divMain.appendChild(createEvento(eventoJSON));
        initChristmas();
        break;
      case "1":
        divMain.appendChild(createEvento(eventoJSON));
        initNewYear();
        break;
      case "2":
        divMain.appendChild(createEvento(eventoJSON));
        initHalloween();
        break;
    }
  }
  function createEvento(eventoJSON) {
    const index = option.value;
    const div = document.createElement("div");
    div.classList.add(`${eventoJSON[index].option}`, "evento");
    div.innerHTML = `<img class="${eventoJSON[index].imgClass}" src="${eventoJSON[index].img}" alt=""><div><h1>Falta quantos dias para o <strong>${eventoJSON[index].evento}</strong>?</h1><div class="contagem"><p class="dias"></p><p class="horas"></p><p class="minutos"></p><p class="segundos"></p></div></div>`;
    return div;
  }
}
