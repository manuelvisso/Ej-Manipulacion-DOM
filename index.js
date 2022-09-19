const pizzaName = document.querySelector(".pizzaName");
const pizzaPrice = document.querySelector(".pizzaPrice");
const pizzaInput = document.getElementById("pizzaInput");
const errorMsg = document.querySelector(".error-msg");

const variedadesDePizza = [
  {
    id: 1,
    nombre: "Muzzarella",
    Ingredientes: ["queso muzzarella", "salsa de tomate"],
    precio: 500,
  },
  {
    id: 2,
    nombre: "Napolitana",
    Ingredientes: [
      "queso muzzarella",
      "salsa de tomate",
      "rodajas de tomate",
      "ajo",
      "perejil",
    ],
    precio: 700,
  },
  {
    id: 3,
    nombre: "Jamón y Morrones",
    Ingredientes: [
      "queso muzzarella",
      "salsa de tomate",
      "jamon cocido",
      "morrones",
      "oliva",
    ],
    precio: 900,
  },
  {
    id: 4,
    nombre: "Fugazzeta",
    Ingredientes: ["queso muzzarella", "cebolla", "ajo"],
    precio: 1000,
  },
  {
    id: 5,
    nombre: "Calabresa",
    Ingredientes: ["queso muzzarella", "salsa de tomate", "pepperoni"],
    precio: 1100,
  },
  {
    id: 6,
    nombre: "Hawaiana",
    Ingredientes: ["queso muzzarella", "salsa de tomate", "piña", "jamón"],
    precio: 800,
  },
];

// const inputVacio = () => {
//   if (!pizzaInput.value) {
//     pizzaName.innerHTML = `Por favor, ingrese un número de pizza para realizar su consulta`;
//     return;
//   }
// };

const avatarSelect = () => {
  let numeroAvatar = pizzaInput.value;
  let container = document.querySelector(".img-container");
  if (numeroAvatar > variedadesDePizza.length || numeroAvatar < 1) {
    container.style.backgroundImage = `url("/img/logo.png")`;
  } else {
    container.style.backgroundImage = `url("/img/${numeroAvatar}.jpg")`;
  }
};

const renderPizza = () => {
  const nroPizza = +pizzaInput.value;

  const getPizza = variedadesDePizza.filter((pizza) => pizza.id === nroPizza);
  if (!pizzaInput.value) {
    errorMsg.innerHTML = `Por favor, ingrese un número de pizza para realizar su consulta`;
    pizzaName.innerHTML = ``;
    pizzaPrice.innerHTML = ``;
    return;
  } else if (nroPizza <= variedadesDePizza.length && nroPizza > 0) {
    document.querySelector(".pizzaName").innerHTML = `${getPizza[0].nombre}`;
    document.querySelector(
      ".pizzaPrice"
    ).innerHTML = `AR$ ${getPizza[0].precio}`;
    errorMsg.innerHTML = ``;
  } else {
    document.querySelector(
      ".pizzaName"
    ).innerHTML = `El número de pizza seleccionado no es válido`;
    document.querySelector(".pizzaPrice").innerHTML = ``;
  }
};

const init = () => {
  document.querySelector(".buscarPizza").addEventListener("click", renderPizza);
  document
    .querySelector(".buscarPizza")
    .addEventListener("click", avatarSelect);
};

init();
