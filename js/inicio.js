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
}
