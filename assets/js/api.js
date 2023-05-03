const pokeapi = {}

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

pokeapi.getDetalhesPokemons = (pokemon) => {
    const response = fetch(pokemon.url);
    const detalhesPokemons = response.json();
    return converteDetailsParaModel(detalhesPokemons);
}

pokeapi.getPokemons = (offset = 0, limit = 6) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    const response = fetch(url);
    const jsonBody = response.json();
    const pokemons = jsonBody.results;
    const detalhesRequests = pokemons.map(pokeapi.getDetalhesPokemons);
    const detalhesPokemons = Promise.all(detalhesRequests);
    return detalhesPokemons;
}

