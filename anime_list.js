const username = 'plomme';

fetch(`https://api.myanimelist.net/v2/users/${username}/animelist`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer aed5f069c7b07cbaa5869dc797eeb0fb',
  }
})
.then(response => response.json())
.then(data => {
  let animeList = data.data;

  // Exiba suas informações do MyAnimeList em seu perfil do GitHub
  let animeListElement = document.getElementById('anime-list');

animeList.forEach(anime => {
  let animeCard = document.createElement('div');
  animeCard.classList.add('anime-card');

  let animeImage = document.createElement('img');
  animeImage.src = anime.node.main_picture.medium;

  let animeTitle = document.createElement('h3');
  animeTitle.textContent = anime.node.title;

  let animeEpisodes = document.createElement('p');
  animeEpisodes.textContent = `Episódios assistidos: ${anime.progress}`;

  animeCard.appendChild(animeImage);
  animeCard.appendChild(animeTitle);
  animeCard.appendChild(animeEpisodes);

  animeListElement.appendChild(animeCard);
});

})
.catch(error => console.error(error));
