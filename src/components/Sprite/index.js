import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    /* height: auto;
    width: auto;
    max-width: 300px;
    max-height: 300px; */
    transform: scale(2, 2);
`

export const Sprite = ({ id }) => (
  <Image
    alt="pokemon"
    src={`https://raw.githubusercontent.com/abrioux/pokedex/master/assets/pokemon/animated/${id}.gif`}
  />
)
