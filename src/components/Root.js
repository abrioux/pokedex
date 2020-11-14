import React, { useState } from 'react'
import styled from 'styled-components'

import PokemonList from './PokemonList'
import PokemonDetailView from './PokemonDetailView'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

const Root = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  return (
    <Container>
      <PokemonList onPokemonClick={setSelectedPokemon} />
      <PokemonDetailView selectedPokemon={selectedPokemon} />
    </Container>
  )
}

export default Root
