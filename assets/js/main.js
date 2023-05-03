const listaPokemon = document.getElementById('lista-pokemon')
const carregaMaisPokemonsButton = document.getElementById('carrega-mais-pokemons')

//const maxRecords = 151
const limit = 6;
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
        carregaMaisPokemons(offset, newLimit)

        carregaMaisPokemonsButton.parentElement.removeChild(carregaMaisPokemonsButton)
    } else {
        carregaMaisPokemons(offset, limit)
    }
})