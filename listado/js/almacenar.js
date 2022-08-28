const agregar = document.getElementById("agregar") 
const limpiar = document.getElementById("limpiar") 
const contenedor = document.getElementById("contenedor") // lista adentro de contenedor
const item = document.getElementById("item")

agregar.addEventListener("click", function(){
    if (item.value) localStorage.setItem("text", item.value);
   listado()

})
limpiar.addEventListener("click", function(){
    localStorage.clear();
})


function listado(){
let htmlContentToAppend = " "
htmlcontenttoappend+= `text`

listado.innerHTML= htmlcontenttoappend}