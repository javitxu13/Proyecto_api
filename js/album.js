function getId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
}

function getAlbumTracks(albumId) {
  return fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.items.map((track) => track.name);
    });
}

function getAlbumInfo(albumId) {
  return fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return { image: data.images[0].url, name: data.name };
    });
}

function renderAlbum(trackNames, albumInfo) {
  let name = albumInfo.name;
  let albumImage = albumInfo.image;
  let resultado = document.getElementById("albumResults");
  let lista = document.createElement("ul");
  let image = document.createElement("img");
  let nameElement = document.createElement("h2");
  nameElement.innerText = name;

  image.setAttribute("src", albumImage);
  nameElement.setAttribute("id", "nombreResult");
  image.setAttribute("id", "albumImage");
  lista.setAttribute("id", "songList");

  trackNames.forEach((trackName) => {
    let listItem = document.createElement("li");
    let paragraph = document.createElement("p");

    paragraph.innerText = trackName;
    listItem.appendChild(paragraph);
    lista.appendChild(listItem);
  });
  resultado.appendChild(nameElement);
  resultado.appendChild(image);
  resultado.appendChild(lista);
}

async function createAlbum() {
  const id = getId();
  const trackNames = await getAlbumTracks(id);
  const albumInfo = await getAlbumInfo(id);

  renderAlbum(trackNames, albumInfo);
}

createAlbum();
