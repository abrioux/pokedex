import React from 'react'
import styled from 'styled-components'

const Image = styled.img``

export const Sprite = ({ id }) => (
  <Image
    alt="pokemon"
    src={`https://raw.githubusercontent.com/abrioux/pokedex/master/assets/pokemon/animated/${id}.gif`}
  />
)
