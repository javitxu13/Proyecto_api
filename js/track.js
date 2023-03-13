function getId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
}

function getTrackInfo(trackId) {
  return fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return {
        trackName: data.name,
        artistName: data.artists[0].name,
        albumName: data.album.name,
        time: data.duration_ms,
      };
    });
}

function renderTrack(track) {
  let nameTrack = track.trackName;
  let name = track.artistName;
  let album = track.albumName;
  let duration = track.time;
  let finalDuration = (duration / 1000 / 60) % 60;

  let resultado = document.getElementById("finalResults");
  let song = document.createElement("h1");
  let nameArtist = document.createElement("h2");
  let nameAlbum = document.createElement("h3");
  let trackDuration = document.createElement("p");
  song.setAttribute("id", "trackName");
  nameArtist.setAttribute("id", "nombreResult");
  nameAlbum.setAttribute("id", "albumName");
  trackDuration.setAttribute("id", "trackDuration");
  song.innerText = nameTrack;
  nameArtist.innerText = name;
  nameAlbum.innerText = album;
  trackDuration.innerText = finalDuration.toFixed(2) + " min.";

  resultado.appendChild(nameArtist);
  resultado.appendChild(nameAlbum);
  resultado.appendChild(song);
  resultado.appendChild(trackDuration);
}

async function createTrack() {
  const id = getId();
  const track = await getTrackInfo(id);
  renderTrack(track);
}

createTrack();
