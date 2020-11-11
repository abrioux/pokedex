import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Spotlight from '../Spotlight'

const AppContainer = styled.div`
  text-align: center;
  padding: 50px;
`

const fetchBasicPokemonData = async () => {
  // Can use pagination too: https://pokeapi.co/api/v2/pokemon/?offset=20&limit=151

  return axios
    .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then((response) => {
      // handle success
      console.log(response)
      return response.data
    })
    .catch((error) => {
      // handle error
      console.log(error)
    })
}

class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: [],
    }
  }

  componentDidMount() {
    fetchBasicPokemonData().then((data) => {
      const { results } = data
      this.setState({
        pokemon: results,
      })
    })
  }

  render() {
    const { pokemon } = this.state

    if (pokemon && pokemon.length) {
      let pokemonList = []

      for (let i = 1; i <= pokemon.length; ++i) {
        pokemonList.push(
          <Spotlight key={i} pokemonData={{ ...pokemon[i - 1], id: i }} />,
        )
      }

      return <AppContainer>{pokemonList}</AppContainer>
    } else {
      return <div />
    }
  }
}

export default Root
