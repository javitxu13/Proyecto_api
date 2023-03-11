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
  let name = artist.name;
  let images = artist.images[0].url;
  let genres = artist.genres;
  let link = artist.external_urls.spotify;
  let resultado = document.getElementById("results");
  let nombre = document.createElement("h2");
  let imagen = document.createElement("img");
  let generos = document.createElement("h3");
  let enlace = document.createElement("a");
  nombre.setAttribute("id", "nombreGrupo");
  imagen.setAttribute("id", "imagenGrupo");
  imagen.setAttribute("src", images);
  generos.setAttribute("id", "generoGrupo");
  enlace.setAttribute("id", "enlaceGrupo");
  nombre.innerText = name;
  imagen.innerText = images;
  generos.innerText = genres;
  enlace.innerText = link;
  resultado.appendChild(nombre);
  resultado.appendChild(imagen);
  resultado.appendChild(generos);
  resultado.appendChild(enlace);
  console.log(images);
}
