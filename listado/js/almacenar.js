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
<<<<<<< HEAD
  contenedor.innerHTML += `<p>${item.value}</p>`
  array.push `<p>${item.value}</p>`
  console.log(array);
=======
  contenedor.innerHTML += `<p>${item.value}</p>`;
  array.push (`<br> ${item.value} `);
  console.log(array.join(''));
>>>>>>> 261c9e513487649023b0a6ec4628cb9b8b5bd8c5
  localStorage.setItem("array", JSON.stringify(array));
}
document.addEventListener("DOMContentLoaded", function () {
    contenedor.innerHTML = JSON.parse(localStorage.getItem("array"));
  }
);
// Juan San Pedro, Romina Calleja, Facundo Grosso, Gonzalo Ferreira