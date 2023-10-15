function getCharacters(data) {
  const results = fetch("https://rickandmortyapi.com/api/character");
  results
    .then((response) => response.json())
    .then((res) => {
      data(res);
    });
}

getCharacters((data) => {
  data.results.forEach((personaje) => {
    const article = document.createElement("article");

    article.innerHTML = `
    <p class="character__name">
    ${personaje.name}</p>
    <img
      src=${personaje.image}
      alt=""
      class="character__img"
    />
    <div class="character__details">
      <p class="character__status">Status: ${personaje.status}</p>
      <p class="character__species">Species: ${personaje.species}</p>
      <p class="character__origin">Origin: ${personaje.origin.name}</p>
    </div>
    `;

    const container = document.querySelector(".character__container");
    container.appendChild(article);
  });
});

function Filter() {
  const buttonFilter = document.querySelectorAll(".button__filter");
}

/*
    <main>
      <article class="character">
        <p class="character__name">alberto</p>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/492.jpeg"
          alt=""
          class="character__img"
        />
        <div class="character__details">
          <p class="character__status">Alive</p>
          <p class="character__species">Alien</p>
          <p class="character__origin">Luna</p>
        </div>
      </article>
    </main>

*/
