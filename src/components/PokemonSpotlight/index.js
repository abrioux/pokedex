import React from 'react'
import styled from 'styled-components'

import { Sprite } from '../Sprite'

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 180px;
  justify-content: center;
  width: 180px;
`

export const PokemonSpotlight = ({ id }) => (
  <Container>
    <Sprite id={id} />
  </Container>
)
