const agregar = document.getElementById("agregar");
const limpiar = document.getElementById("limpiar");
const contenedor = document.getElementById("contenedor"); // lista adentro de contenedor
const item = document.getElementById("item");
let array = [];

agregar.addEventListener("click", function () {
  listado();
  item.value = "";
});

limpiar.addEventListener("click", function () {
  localStorage.clear();
  contenedor.innerHTML = "";
});

function listado() {
  if (item.value.length);
  contenedor.innerHTML += `<p>${item.value}</p>`;
  array.push (`<br> ${item.value} `);
  console.log(array.join(''));
  localStorage.setItem("array", JSON.stringify(array));
}
document.addEventListener("DOMContentLoaded", function () {
    contenedor.innerHTML = JSON.parse(localStorage.getItem("array"));
  }
);
// Juan San Pedro, Romina Calleja, Facundo Grosso, Gonzalo Ferreira