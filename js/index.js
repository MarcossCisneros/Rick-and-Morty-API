const results = fetch("https://rickandmortyapi.com/api/character");
results
  .then((response) => response.json())
  .then((res) => {
    filter(res.results), renderizarTarjetas(res.results);
  });

const todos = document.querySelector(".todos");

todos.addEventListener("click", () => {
  const results = fetch("https://rickandmortyapi.com/api/character");
  results
    .then((response) => response.json())
    .then((res) => {
      filter(res.results), renderizarTarjetas(res.results);
    });
});

function renderizarTarjetas(data) {
  const contenedor = document.querySelector(".character__container");
  contenedor.innerHTML = "";

  data.forEach((personaje) => {
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
}

function filter(data) {
  const botones = document.querySelectorAll(".button__filter");

  botones.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const personajeCategoria = data.filter(
        (personaje) => personaje.species === e.currentTarget.id
      );

      renderizarTarjetas(personajeCategoria);
    });
  });
}
