
function detalhesPokemon(pokemon) {

    const height = (pokemon.height) / 10;
    const weight = (pokemon.weight) / 10;

    const htmlDetalhes = `
        
            <div class="popup">
                <button id="close-btn" onClick="fechaDetalhes()">X</button>
                <li class="pokemon ${pokemon.type} card-top" onclick="selecionaPokemon(${pokemon.id})">
                    <span class="number">#${pokemon.order}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>

                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
                <div class="info-container">
                    <li class="about">Sobre</li>    
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
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup)
}
