import React from 'react'
import {  Box } from "@mui/material";
import axios from 'axios'


function Home () {
    const [listaPokemon, setListaPokemon] = React.useState([])
    const [paginacao, setPaginacao] = React.useState()
    const [paginaAtual, setPaginaAtual] = React.useState(1)

    const buscarPokemon = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60`)
        setListaPokemon(response.data.results)
    }

    React.useEffect(() => {
        buscarPokemon()
    }, [])

    console.log(listaPokemon)
    return (
        <Box sx={{ display:'block', justifyContent:'space-around' }}>
        {listaPokemon.map((pokemon, index) => (
            <Box sx={{ width: 'fit-content', height: '5%', backgroundColor: 'violet', margin:'10px' }} key={index}>
                {pokemon.name.toUpperCase()}
            </Box>
        ))}
        </Box>
    )
}
export default Home