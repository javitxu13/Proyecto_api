document.getElementById("Canciones").addEventListener("click",search)
document.getElementById("Albums").addEventListener("click", searchAlbums);


function search (){
    let text = document.getElementById("Buscar").value 
    let textEncoded = encodeURIComponent(text);
    let sectionResult = document.getElementById("Resultados")

    fetch (`https://api.spotify.com/v1/search?q=${textEncoded}&type=track&`,{
    method:'GET',
    headers:{
        Authorization: 'Bearer '+ token,
    }
    })
    .then(response => response.json())
    .then(data =>{
        let items = data.tracks.items;
        items.forEach(element => {
            console.log (`${element.name} / ${element.album.name}`)
        });
    })
    .catch(error => console.error(error))
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


function searchAlbums (){
    let text = document.getElementById("Buscar").value 
    let textEncoded = encodeURIComponent(text);
    let sectionResult = document.getElementById("Resultados")

    fetch (`https://api.spotify.com/v1/search?q=${textEncoded}&type=album&`,{
    method:'GET',
    headers:{
        Authorization: 'Bearer '+ token,
    },
    })
    .then(response => response.json())
    .then(data =>{
        let items = data.albums.items
        items.forEach(element => {
            console.log (`${element.name}`)
        });
    })
    .catch(error => console.error(error))

let resultadosDiv = document.getElementById('Buscador');
let nombreAlbums = element.album.name;
let nombreCanciones = element.name;
let nuevoElemento = document.createElement('p');
nuevoElemento.textContent = `${nombreCanciones} / ${nombreAlbums}`;
resultadosDiv.appendChild(nuevoElemento);
}

