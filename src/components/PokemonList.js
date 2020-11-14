import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'

import ListItem from './ListItem'

const POKEMON_FETCH_LIMIT = 151
const LIST_WIDTH = 300

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: scroll;
  text-align: center;
  padding: 20px;
  width: ${LIST_WIDTH}px;
  max-width: ${LIST_WIDTH}px;
`

const fetchBasicPokemonData = async () => {
  // Can use pagination too: https://pokeapi.co/api/v2/pokemon/?offset=20&limit=151
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=${POKEMON_FETCH_LIMIT}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
    })
}

class PokemonList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemonList: [],
    }
  }

  componentDidMount() {
    fetchBasicPokemonData().then((data) => {
      const { results } = data
      this.setState({
        pokemonList: results,
      })
    })
  }

  render() {
    const { pokemonList } = this.state
    const { onPokemonClick } = this.props

    if (pokemonList && pokemonList.length) {
      return (
        <Container>
          {pokemonList.map((pokemon, index) => {
            //"https://pokeapi.co/api/v2/pokemon/1/"
            return (
              <ListItem
                key={index}
                id={index + 1}
                name={pokemon.name}
                onClick={onPokemonClick}
                url={pokemon.url}
              />
            )
          })}
        </Container>
      )
    } else {
      // Could replace this with some Suspense comp
      return <Container />
    }
  }
}

PokemonList.propTypes = {
  onPokemonClick: PropTypes.func,
}

export default PokemonList
