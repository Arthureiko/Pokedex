const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {


    pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelector = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelector
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir )
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivo = document.querySelector('.ativo')
        pokemonAtivo.classList.remove('ativo')

        const pokemonselector = document.getElementById(idPokemonSelector)
        pokemonselector.classList.add('ativo')
    })
})