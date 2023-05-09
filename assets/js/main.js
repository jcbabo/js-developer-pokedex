
const listaPokemon = document.getElementById('lista-pokemon');
const cardPokemon = document.getElementById('card-pokemon');
const carregaMaisPokemonsButton = document.getElementById('carregaMaisPokemons');

let offset = 0;
const limit = 12;

function pokemonLi(pokemon) {
    return `
        <li id="pokemon" class="pokemon ${pokemon.type}" onclick="selecionaPokemon(${pokemon.id})">
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
        cardPokemon.innerHTML += HtmlDetalhes;
        
        const escondePokemonList = document.getElementById("lista-pokemon");
        escondePokemonList.classList.add("hide");
        
        const escondeButton = document.getElementById("carregaMaisPokemons");
        escondeButton.classList.add("hide");
        
        const mostraButtonRetornarParaLista = document.getElementById("mostraLista");
        mostraButtonRetornarParaLista.classList.remove("hide");
        
    })
}