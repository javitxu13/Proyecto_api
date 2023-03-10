function goToArtist(artistId) {
  fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      createArtist(data);
    });
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log(id);
goToArtist(id);

function createArtist(artist) {
  let objeto = document.getElementById("miLista");
  let name = artist.name;
  let images = artist.images;
  let genres = artist.genres;
  let link = artist.external_urls.spotify;
  console.log(link);
  let nombre = document.createElement("h2");
  nombre.appendChild(name);
  objeto.appendChild(nombre);
}

// Obtenemos la lista del HTML y la asignamos a una variable
let lista = document.getElementById("miLista");

// Creamos un elemento <li> y le asignamos el texto pasado como argumento
let nuevoElemento = document.createElement("li");
let link = document.createElement("a");
link.setAttribute("href", "artist.html?id=" + elemento.id);
link.setAttribute("target", "_blank");
link.textContent = elemento.name;
nuevoElemento.appendChild(link);

//li.addEventListener("keyup",searchAlbums); /*cada vez q se crea un nuevo elemento de la lista, le estamos pasando la función clickImportant para que podamos*/

// Agregamos el nuevo elemento a la lista
lista.appendChild(nuevoElemento);
