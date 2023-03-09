document.getElementById("Canciones").addEventListener("click", search);
document.getElementById("Artistas").addEventListener("click", searchArtist);

function search() {
  let text = document.getElementById("Buscar").value;
  let textEncoded = encodeURIComponent(text);
  let sectionResult = document.getElementById("Resultados");
  let type = a;
  fetch(`https://api.spotify.com/v1/search?q=${textEncoded}&type=${a}&`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let items = data.tracks.items;
      items.forEach((element) => {
        console.log(`${element.name} / ${element.album.name}`);
      });
    })
    .catch((error) => console.error(error));
  searchSongs();
  searchArtist();
  searchAlbums();
}

function searchSongs() {
  let text = document.getElementById("Buscar").value;
  let textEncoded = encodeURIComponent(text);
  let sectionResult = document.getElementById("Resultados");
  let items = data.traks.items;
  let type = track;

  fetch(`https://api.spotify.com/v1/search?q=${textEncoded}&type=track&`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let items = data.tracks.items;
      items.forEach((element) => {
        console.log(`${element.name} / ${element.album.name}`);
      });
    })
    .catch((error) => console.error(error));
}

function searchArtist() {
  let text = document.getElementById("Buscar").value;
  let textEncoded = encodeURIComponent(text);
  let sectionResult = document.getElementById("Resultados");

  fetch(`https://api.spotify.com/v1/search?q=${textEncoded}&type=artist&`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let items = data.artists.items;
      items.forEach((element) => {
        console.log(`${element.name}`);
      });
    })
    .catch((error) => console.error(error));
}

function mostrarResultado(event) {
  event.preventDefault();
  let artista = document.getElementById("nombre").value.trim();
  crearResultado(Artista);
}

/*
function crearResultado(Artista) {
  let ul = document.createElement("ul");
  let li = document.createElement("li");

  li.innerText = Artista;

  ul.appendChild(li);

  document.getElementById("Artistas").appendChild(ul);
} */
