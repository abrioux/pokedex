import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Sprite from '../Sprite'
import InfoPanel from '../InfoPanel'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const SpriteContainer = styled.div`
  align-items: center;
  border: 2px solid darkgrey;
  border-radius: 3px;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 100px;
`

const Spotlight = ({ pokemonData }) => (
  <Container>
    <SpriteContainer>
      <Sprite id={pokemonData.id} />
    </SpriteContainer>
    <InfoPanel pokemonData={pokemonData} />
  </Container>
)

InfoPanel.propTypes = {
  pokemonData: PropTypes.object,
}

export default Spotlight
