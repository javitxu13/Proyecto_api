document.getElementById("track").addEventListener("click", search);
document.getElementById("artist").addEventListener("click", search);
document.getElementById("album").addEventListener("click", search);

function search(event) {
  let text = document.getElementById("Buscar").value.trim();
  if(text === "") return;
  let textEncoded = encodeURIComponent(text);
  let boton = event.target;
  let type = boton.id;

  fetch(`https://api.spotify.com/v1/search?q=${textEncoded}&type=${type}&`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      borrarLista();
      if (type === "track") {
        let items = data.tracks.items;
        showTracks(items);
      } else if (type === "artist") {
        let items = data.artists.items;
        showArtists(items);
      } else if (type === "album") {
        let items = data.albums.items;
        showAlbums(items);
      }
    })
    .catch((error) => console.error(error));
}

function showTracks(tracks) {
  tracks.forEach((element) => {
    console.log(`${element.name} / ${element.album.name}`);
    mostrarElemento(element);
  });
}

function showArtists(artists) {
  artists.forEach((element) => {
    console.log(`${element.name}`);
    mostrarElemento(element);
  });
}

function showAlbums(album) {
  album.forEach((element) => {
    console.log(`${element.name}`);
    mostrarElemento(element);
  });
}


function borrarLista(){
  let miDiv = document.getElementById("miLista");
  miDiv.innerHTML = "";
}

function mostrarElemento(elemento) {
  // Obtenemos la lista del HTML y la asignamos a una variable
  let lista = document.getElementById("miLista");
  // Creamos un elemento <li> y le asignamos el texto pasado como argumento
   let nuevoElemento = document.createElement("li");
  let link = document.createElement("a");
  link.setAttribute("href", "artist.html?id=" + elemento.id);
  link.setAttribute("target", "_blank");
  link.textContent = elemento.name;
  nuevoElemento.appendChild(link);

  // Agregamos el nuevo elemento a la lista
  lista.appendChild(nuevoElemento);

  


  //Creamos icono fav
  let iconoEstrella = document.createElement("i");
  iconoEstrella.classList.add("fa", "fa-heart");
  nuevoElemento.appendChild(iconoEstrella);

  // Agregamos el nuevo elemento a la lista
  lista.appendChild(nuevoElemento);

  
}


 function listaFavoritos(){
  // Obtener el elemento de lista que queremos
  let lista = document.getElementById("miLista");

  // Crear un botón de favoritos y agregarlo a cada elemento de la lista
  let elementos = lista.getElementsByTagName("li");
  for (let i = 0; i < elementos.length; i++) {
    let botonFavoritos = document.createElement("button");
    let iconoEstrella = document.createElement("i");
    botonFavoritos.appendChild(iconoEstrella);
    elementos[i].appendChild(botonFavoritos);

    // Agregar un manejador de eventos al botón de favoritos
    botonFavoritos.addEventListener("click",()=>{
      addFavorito
    });
  }
} 

function getFavoritos(){
  let favoritos = localStorage.getItem("Favoritos")
  if(favoritos==null){
    favoritos = []
  }else{
    favoritos = JSON.parse(favoritos)
  }
  return favoritos;

}

function addFavorito(nombre){
  let favoritos = getFavoritos()
  if(favoritos.includes(nombre)){
    return;
  }
  favoritos.push(nombre)
  let favoritosString = JSON.stringify(favoritos);
  localStorage.setItem('Favoritos', favoritosString);


  
}



/* // Función para agregar elementos a favoritos (ya definida anteriormente)
function agregarAFavoritos(elemento) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  if (favoritos.some(item => item.id === elemento.id)) {
    console.log('El elemento ya está en favoritos.');
    return;
  }
  favoritos.push(elemento);
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  console.log('El elemento ha sido agregado a favoritos.');
}

// Obtenemos el elemento guardado en el local storage
const elementoDesdeLocalStorage = localStorage.getItem('Articulo añadido a favoritos');

// Convertimos el elemento de texto a su formato original
const elementoEnFormatoOriginal = JSON.parse(elementoDesdeLocalStorage);

console.log(elementoEnFormatoOriginal); // 'elemento2'



 */



