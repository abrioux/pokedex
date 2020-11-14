import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  border: 2px solid darkgrey;
  border-radius: 3px;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 100px;
`

const Image = styled.img`
  height: auto;
  width: auto;
  max-width: 75px;
  max-height: 75px;
`

const Sprite = ({ id }) => (
  <Container>
    <Image
      alt='pokemon'
      src={`https://raw.githubusercontent.com/abrioux/pokedex/master/assets/pokemon/artwork/${id}.png`}
    />
  </Container>
)

Sprite.propTypes = {
  id: PropTypes.number,
}

export default Sprite
