function converteDetailsParaModel(detalhesPokemons) {
    const pokemon = new pokemonModel();

    pokemon.id = detalhesPokemons.id;
    pokemon.order = detalhesPokemons.order;
    pokemon.name = detalhesPokemons.name;

    const types = detalhesPokemons.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.type = type;
    pokemon.types = types;
    pokemon.photo = detalhesPokemons.sprites.other.dream_world.front_default;

    pokemon.height = detalhesPokemons.height;
    pokemon.weight = detalhesPokemons.weight;
    const abilities = detalhesPokemons.abilities.map((abilitySlot) => abilitySlot.ability.name);

    const [ability] = abilities;
    pokemon.ability = ability;
    pokemon.abilities = abilities;

    return pokemon;
}

