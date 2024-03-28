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

const apiKey = "RYLtn8ipd21UgPcXoWz";
const url = "https://api.mixdrop.ag/endpoint"; // Reemplaza "endpoint" con el endpoint real de la API que estés utilizando

fetch(url, {
  method: 'GET', // Método de la solicitud (GET, POST, etc.)
  headers: {
    'Authorization': `Bearer ${apiKey}`, // Incluir la API Key en el encabezado Authorization
    'Content-Type': 'application/json' // Tipo de contenido de la solicitud (si corresponde)
  }
})
.then(response => response.json())
.then(data => {
  console.log(data); // Hacer algo con la respuesta de la API
})
.catch(error => {
  console.error('Error:', error);
});
