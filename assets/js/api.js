const pokeApi = {}

function converteDetailsParaModel(detalhesPokemons) {
    const pokemon = new pokemonModel();
    pokemon.order = detalhesPokemons.order;
    pokemon.name = detalhesPokemons.name;
    
    const types = detalhesPokemons.types.map((typeSlot) => typeSlot.type.name);
    const [ type ] = types;

    pokemon.type = type;
    pokemon.types = types;
    pokemon.photo = detalhesPokemons.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getDetalhesPokemons = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(converteDetailsParaModel)
}

pokeApi.getPokemons = (offset = 0, limit = 6) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getDetalhesPokemons))
        .then((detalhesRequests) => Promise.all(detalhesRequests))
        .then((detalhesPokemons) => detalhesPokemons)
}

