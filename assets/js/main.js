
const listaPokemon = document.getElementById('lista-pokemon');
const carregaMaisPokemonsButton = document.getElementById('carrega-mais-pokemons');

let offset = 0;
const limit = 3;

function pokemonLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="selecionaPokemon(${pokemon.id})">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

function carregaMaisPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const novoHtml = pokemons.map(pokemonLi).join('');
        listaPokemon.innerHTML += novoHtml
    })
}

carregaMaisPokemons(offset, limit);

carregaMaisPokemonsButton.addEventListener('click', () => {
    offset += limit
    carregaMaisPokemons(offset, limit);
});

function selecionaPokemon(id) {
    pokeApi.getPokemonsById(id).then((pokemon) => {
        const HtmlDetalhes = detalhesPokemon(pokemon);
        listaPokemon.innerHTML += HtmlDetalhes
    })
}