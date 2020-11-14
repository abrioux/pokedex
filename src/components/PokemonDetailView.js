import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const fetchPokemonData = async (selectedPokemonUrl) =>
  axios
    .get(selectedPokemonUrl)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
    })

const PokemonDetailView = ({ selectedPokemon }) => {
  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    if (selectedPokemon !== null) {
      fetchPokemonData(selectedPokemon).then((data) => {
        setPokemonData(data)
      })
    }
  }, [selectedPokemon])

  if (pokemonData !== null) {
    return <div>{pokemonData.name}</div>
  } else {
    return <div>Select a pokemon...</div>
  }
}

PokemonDetailView.propTypes = {
  selectedPokemon: PropTypes.string,
}

export default PokemonDetailView
