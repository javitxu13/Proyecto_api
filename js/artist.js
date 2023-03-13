function getId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
}

function getArtist(artistId) {
  return fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return {
        name: data.name,
        images: data.images[0].url,
        genres: data.genres,
        link: data.external_urls.spotify,
      };
    });
}

function renderArtist(artist) {
  let name = artist.name;
  let images = artist.images;
  let genres = artist.genres;
  let link = artist.link;

  let resultado = document.getElementById("finalResults");
  let nombre = document.createElement("h2");
  let imagen = document.createElement("img");
  let generos = document.createElement("h3");
  let enlace = document.createElement("a");
  nombre.setAttribute("id", "nombreResult");
  imagen.setAttribute("id", "imagenGrupo");
  imagen.setAttribute("src", images);
  generos.setAttribute("id", "generoGrupo");
  enlace.setAttribute("id", "enlaceGrupo");
  enlace.setAttribute("href", link);
  enlace.setAttribute("target", "_blank");
  nombre.innerText = name;
  imagen.innerText = images;
  generos.innerText = genres;
  enlace.innerText = "Link";
  resultado.appendChild(nombre);
  resultado.appendChild(imagen);
  resultado.appendChild(generos);
  resultado.appendChild(enlace);
}

async function createArtist() {
  const id = getId();
  const artist = await getArtist(id);
  renderArtist(artist);
}

createArtist();
