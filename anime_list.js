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
  console.log(animeList);
})
.catch(error => console.error(error));
