import axios from 'axios'
import React from 'react'

function Api () {

 const listaPokemon = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    console.log(response.data)
    return response.data
}
    
}
export default Api