const listaPokemon = document.getElementById('lista-pokemon')
const loadMoreButton = document.getElementById('loadMoreButton')

//const maxRecords = 151
const limit = 12;
let offset = 0;

function convertePokemonParaLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
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
        const novoHtml = pokemons.map(convertePokemonParaLi).join('')
        listaPokemon.innerHTML += novoHtml
    })
}

carregaMaisPokemons(offset, limit)

carregaMaisPokemonsButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})