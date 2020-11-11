import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.img`
  height: auto;
  width: auto;
  max-width: 75px;
  max-height: 75px;
`

const Sprite = ({ id }) => (
  <Image
    alt='pokemon'
    src={`https://raw.githubusercontent.com/abrioux/pokedex/master/assets/pokemon/artwork/${id}.png`}
  />
)

Sprite.propTypes = {
  id: PropTypes.string,
}

export default Sprite
