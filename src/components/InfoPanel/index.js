import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
Container.displayName = 'Container'

const Header = styled.div`
  display: flex;
  flex-direction: row;
`
Header.displayName = 'Header'

const PokemonNumber = styled.div`
  border-radius: 3px;
  background-color: lightgrey;
  padding: 5px;
  font-weight: bold;
`
PokemonNumber.displayName = 'PokemonNumber'

const PokemonName = styled.div`
  font-size: 14px;
  color: black;
`
PokemonName.displayName = 'PokemonName'

export const InfoPanel = () => (
  <Container>
    <Header>
      <PokemonNumber>#001</PokemonNumber>
      <PokemonName>Bulbasaur</PokemonName>
    </Header>
  </Container>
)
InfoPanel.displayName = 'InfoPanel'
