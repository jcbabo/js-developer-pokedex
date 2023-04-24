const url_details = `https://pokeapi.co/api/v2/pokemon/1/`

fetch(url_details)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))



function openDetails(event) {
    event = document.querySelector('.detail');
    console.log("Sucesso");
}