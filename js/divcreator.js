import initChristmas from "./christmas.js";
import initNewYear from "./newyear.js";
import initHalloween from "./halloween.js";

export default function initDivCreator() {
  const btn = document.querySelectorAll(".btn");
  const btnDelete = document.querySelector(".btn-delete");
  const toki = document.querySelector(".toki");

  btn.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
  btnDelete.addEventListener("click", handleDelete);

  function handleClick(event) {
    event.preventDefault();
    const optionValue = event.currentTarget.getAttribute("data-value");
    fetchEvento("./eventos.json", optionValue);
  }
  async function fetchEvento(url, optionValue) {
    const eventoReponse = await fetch(url);
    const eventoJSON = await eventoReponse.json();
    const divMain = document.querySelector(".main");

    handleDelete();

    divMain.appendChild(createEvento(eventoJSON, optionValue));
    switch (optionValue) {
      case "0":
        initChristmas();
        toki.classList.add("none");
        break;
      case "1":
        initNewYear();
        toki.classList.add("none");
        break;
      case "2":
        initHalloween();
        toki.classList.add("none");
        break;
    }
  }
  function createEvento(eventoJSON, optionValue) {
    const index = optionValue;
    const div = document.createElement("div");
    if (window.innerWidth > 500) {
      div.classList.add(`${eventoJSON[index].option}`, "evento");
      div.innerHTML = `<img class="${eventoJSON[index].imgClass}" src="${eventoJSON[index].img}" alt=""><div class="margem"><h1>Falta quantos dias para o <strong>${eventoJSON[index].evento}</strong>?</h1><div class="contagem"><p class="dias"></p></div></div>`;
      return div;
    } else {
      div.classList.add(`${eventoJSON[index].option}`, "evento");
      div.innerHTML = `<img class="${eventoJSON[index].imgClass}" src="${eventoJSON[index].img}" alt=""><div class="margem"><h1>Falta quantos dias para o <strong>${eventoJSON[index].evento}</strong>?</h1><div class="contagem"><p class="dias"></p><p class="minutos"></p></div></div>`;
      return div;
    }
  }
}

function handleDelete() {
  const divMain = document.querySelector(".main");
  const existingEvento = divMain.querySelector(".evento");
  const toki = document.querySelector(".toki");
  if (toki.classList.contains("none")) toki.classList.remove("none");
  if (existingEvento) {
    // Se existir, remove o evento
    divMain.removeChild(existingEvento);
  }
}
