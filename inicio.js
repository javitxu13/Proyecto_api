document.getElementById("Buscar").addEventListener("keyup",search)

function search (){
    let text = document.getElementById("Buscar").value 
    let sectionResult = document.getElementById("Resultados")
    let iconoFav = crearIcono("fa-heart",favoritos);
    fetch ('https://api.spotify.com/v1/search?q=abajo el trabajo&type=track&')
    let section = document.createElement("section")
    section.appendChild(iconoFav)

}


function crearIcono(simbolo,callback){
    let icono = document.createElement("i");
    icono.classList.add("fa",simbolo);
    icono.addEventListener("click",callback);
    return icono;

}


function favoritos(){
    let button = document.createElement("button")
    let iconoFav = crearIcono("fa-heart",favoritos);
     //("fas fa-heart-broken")
}


