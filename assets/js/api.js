const pokeApi = {}

pokeApi.getDetalhesPokemons = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(converteDetailsParaModel)
}

pokeApi.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getDetalhesPokemons))
        .then((detalhesRequests) => Promise.all(detalhesRequests))
        .then((detalhesPokemons) => detalhesPokemons)
}

pokeApi.getPokemonsById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch(url)
        .then((response) => response.json())
        .then((pokemonSelecionado) => converteDetailsParaModel(pokemonSelecionado))
        .then((pokemonModel) => pokemonModel)
}

