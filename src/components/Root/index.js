import React from 'react'
import styled from 'styled-components'

import { PokemonSpotlight } from '../PokemonSpotlight'

const AppContainer = styled.div`
  text-align: center;
`

export const Root = () => {
  let pokemon = []
  for (let i = 1; i <= 151; ++i) {
    pokemon.push(<PokemonSpotlight id={i} />)
  }

  return <AppContainer>{pokemon}</AppContainer>
}

Root.displayName = 'Root'
