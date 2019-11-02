import React from 'react'
import styled from 'styled-components'

import { Spotlight } from '../Spotlight'

const AppContainer = styled.div`
  text-align: center;
  padding: 50px;
`
AppContainer.displayName = "AppContainer"

export const Root = () => {
  // let pokemon = []
  // for (let i = 1; i <= 151; ++i) {
  //   pokemon.push(<PokemonSpotlight id={i} />)
  // }

  // return <AppContainer>{pokemon}</AppContainer>
  return (
    <AppContainer>
      <Spotlight />
    </AppContainer>
  )
}

Root.displayName = 'Root'
