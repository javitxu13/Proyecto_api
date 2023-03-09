document.getElementById("Canciones").addEventListener("click", searchSongs);
document.getElementById("Artistas").addEventListener("click", searchArtist);

function searchSongs() {
  let text = document.getElementById("Buscar").value;
  let textEncoded = encodeURIComponent(text);
  let sectionResult = document.getElementById("Resultados");

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
