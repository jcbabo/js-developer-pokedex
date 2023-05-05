
function detalhesPokemon(pokemon) {

    const height = (pokemon.height) / 10;
    const weight = (pokemon.weight) / 10;

    const htmlDetalhes = `
        <div class="popup">
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
            <li class="about">Sobre</li>    
            <li>
                <span class="label">Altura</span>
                <span class="content">${height}m</span>
                <span class="label">Peso</span>
                <span class="content">${weight}kg</span>
                <span class="label">habilidades</span>
                <span class="content abilities-details">
                    <ol class="abilities">
                        ${pokemon.abilities.map((ability) => `<li class="ability">${ability}</li>`).join('')}
                    </ol>
                </span>
            </li>
            <button id="closeBtn" onClick="fechaDetalhes()">X</button>
        </div>
    `
    return htmlDetalhes;
}

const fechaDetalhes = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup)
}
