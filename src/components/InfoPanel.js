import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
`

const PokemonNumber = styled.div`
  border-radius: 3px;
  background-color: lightgrey;
  padding: 5px;
  font-weight: bold;
`

const PokemonName = styled.span`
  font-size: 14px;
  text-transform: capitalize;
  color: black;
  margin-left: 8px;
`

const InfoPanel = ({ id, name, url }) => {
  const formattedId = ('000' + id).slice(-3)

  return (
    <Container>
      <Header>
        <PokemonNumber>#{formattedId}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
      </Header>
    </Container>
  )
}

InfoPanel.propTypes = {
  pokemonData: PropTypes.object,
}

export default InfoPanel
