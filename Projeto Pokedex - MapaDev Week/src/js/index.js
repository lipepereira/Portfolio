/*
Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

para isso, vamos precisar trabalhar com dois elementos:

1- listagem
2- cartão do pokémon

precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokémons

- remover a classe open só do cartao que esta aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
- remover a classe ativo que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado 
*/

// precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela
const listSelectionPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')


listSelectionPokemons.forEach(pokemon => {
    // vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokémons
    pokemon.addEventListener('click', () => {
        // remover a classe open só do cartao que esta aberto
        const cardPokemonOpen = document.querySelector('.open')

        cardPokemonOpen.classList.remove('open')

        // ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
        const idPokemonSelected = pokemon.attributes.id.value
        const idCardPokemonToOpen = 'card-' + idPokemonSelected
        const cardPokemonToOpen = document.getElementById(idCardPokemonToOpen)
        
        cardPokemonToOpen.classList.add('open')

        // remover a classe ativo que marca o pokemon selecionado
        const pokemonActiveListing = document.querySelector('.active')

        pokemonActiveListing.classList.remove('active')

        // adicionar a classe ativo no item da lista selecionado 
        const pokemonSelectedListing = document.getElementById(idPokemonSelected)

        pokemonSelectedListing.classList.add('active')
    })
})