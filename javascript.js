// Utilizando la api de Pokemons 'https://pokeapi.co/' y usando sólo async/await:
// Obtener un Pokemon de manera aleatoria (Axios)
// Tras obtener dicho Pokémon
// Obten su imágen correspondiente
// Obtener nombre del Pokémon
// Dibujar nombre e imágen del Pokémon en el DOM
// OJO!! Te tocará estudiar cómo funciona la API de Pokémon para encontrar la imágen. Puede que tengas que hacer más de una petición Axios!! (depende de la ruta de consulta que uses)
const btn = document.getElementById("searchPokemon")
const result = document.getElementById("result")
let numberRandom;

const random = () => {
    numberRandom = Math.floor((Math.random() * (1126 - 1 + 1)) + 1);
    return numberRandom
}
const paintResult = (name, image) => {
    result.innerHTML = `<h1>${name}</h1> </br> <img src=${image}>`
}


const saveApi = async(e) => {
    e.preventDefault()

    random()
    try {
        const api = await axios.get("https://pokeapi.co/api/v2/pokemon/" + numberRandom)
        const pokemon = api.data.name
        const image = api.data.sprites.front_default
        paintResult(pokemon, image)

    } catch (error) {
        console.error(error)
    }
}


btn.addEventListener("click", saveApi)