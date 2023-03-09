document.getElementById("Canciones").addEventListener("click",searchSong);
document.getElementById("Albums").addEventListener("click", searchAlbums);



function searchSong (){
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

}

