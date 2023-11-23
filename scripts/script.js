
let urlEndpoint = "https://pokeapi.co/api/v2/pokemon"
let listaPokemons = null;
let pokemon = {}
const divPokemons = document.getElementById("listaPokemons");

async function CarregarPokemons(url) {
    try {
        let response = await fetch(url);
        let pokemons = await response.json();
        listaPokemons = pokemons;
    }
    catch (error) {
        console.log(error);
    }
}
async function CarregarInfo(url) {
    let response = await fetch(url)
    let pokemons = await response.json()
    return pokemons;
}

CarregarPokemons(urlEndpoint).then( () => {
    listaPokemons.results.forEach( async (pokemon) => {
        pokemonDados = await CarregarInfo(pokemon.url)
        divPokemons.innerHTML += `<div class="card m-2 p-2 text-center" style="width: 200px;">
                                    <img src="${pokemonDados.sprites.other.dream_world.front_default}" class="card-img-top p-4" alt="...">
                                  ${pokemonDados.name}
                                  </div>`
    })
});

