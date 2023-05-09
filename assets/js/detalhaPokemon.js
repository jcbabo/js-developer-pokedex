
function detalhesPokemon(pokemon) {

    const height = (pokemon.height) / 10;
    const weight = (pokemon.weight) / 10;

    const htmlDetalhes = `
        
            <div id="popup">
                <li class="pokemon ${pokemon.type} card-top" onclick="selecionaPokemon(${pokemon.id})">
                    <span class="number number-card">#${pokemon.order}</span>
                    <span class="name name-card">${pokemon.name}</span>

                    <div class="detail detail-card">
                        <ol class="types types-card">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>

                        <img  id="img-card" src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
                <div class="info-container ${pokemon.type}">
                    <!-- <li class="about">Sobre</li> -->
                    <li class="card-bottom">
                        <span class="label">Altura</span>
                        <span class="value">${height}m</span>
                        <span class="label">Peso</span>
                        <span class="value">${weight}kg</span>
                        <span class="label">habilidades</span>
                        <ol class="value abilities">
                            ${pokemon.abilities.map((ability) => `<li class="ability">${ability}</li>`).join('')}
                        </ol>
                    </li>
                </div>
            </div>
    `
    return htmlDetalhes;
}

const fechaDetalhes = () => {
    const mostraLista = document.querySelector("#lista-pokemon");
    mostraLista.classList.remove("hide");
    mostraLista.classList.add("pokemons");

    const popup = document.querySelector('#popup');
    popup.parentElement.removeChild(popup);

    const mostraButton = document.getElementById('carregaMaisPokemons');
    mostraButton.classList.remove('hide');

    const escondeButtonVoltarlista = document.getElementById('mostraLista');
    escondeButtonVoltarlista.classList.add("hide");
}