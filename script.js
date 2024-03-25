function addAnime() {
  const animeInput = document.getElementById("anime-input");
  const animeTitle = animeInput.value.trim();
  if (animeTitle !== "") {
    const animeList = document.getElementById("anime-list");
    const animeItem = document.createElement("li");
    animeItem.classList.add("anime-item");
    animeItem.textContent = animeTitle;
    animeList.appendChild(animeItem);
    animeInput.value = "";
  }
}


const slider = document.querySelector('.slider');

function rotateImages() {
  const firstImage = slider.firstElementChild;
  slider.removeChild(firstImage);
  slider.appendChild(firstImage);
}

setInterval(rotateImages, 3000); // Cambia la imagen cada 3 segundos (3000 milisegundos)

