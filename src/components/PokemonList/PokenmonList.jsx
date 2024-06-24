 import React, { useEffect, useState } from 'react'
// import './PokenmonList.css'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon'

function PokenmonList() {
    const [PokeList,SetPokeList]=useState([])
    const[Loading,SetIsLoading]=useState(true)
    async function downloadPokemon(){
        const response= await axios.get('https://pokeapi.co/api/v2/pokemon')
        const pokemonResult= response.data.results
        const pokemonResultPromise=pokemonResult.map((pokemon)=> axios.get(pokemon.url))
        const PokemonData= await axios.all(pokemonResultPromise) 
        console.log(PokemonData)
        const result=PokemonData.map((pokemon)=>{
        const newpokemon=pokemon.data
        return {
              id: newpokemon.id,
              Name:newpokemon.name,
              Image: newpokemon.sprites.front_shiny
        }
    })
    SetPokeList(result)
    SetIsLoading(false)
}
    useEffect(()=>{downloadPokemon()})
  return (
   <div>
   <h1>Pokemon List</h1>
   {(Loading) ? 'Loading...' : PokeList.map((p)=> <Pokemon Name={p.Name} Image={p.Image} id={p.id}/> )
   }
   </div>
  )
}
export default PokenmonList