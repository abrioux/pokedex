import React from 'react'
import styled from 'styled-components'

import { PokemonSpotlight } from '../PokemonSpotlight'
import { Pokedex } from '../Pokedex'

const AppContainer = styled.div`
  text-align: center;
  padding: 50px;
`

export const Root = () => {
  // let pokemon = []
  // for (let i = 1; i <= 151; ++i) {
  //   pokemon.push(<PokemonSpotlight id={i} />)
  // }

  // return <AppContainer>{pokemon}</AppContainer>
  return (
    <AppContainer>
      <Pokedex />
    </AppContainer>
  )
}

Root.displayName = 'Root'
