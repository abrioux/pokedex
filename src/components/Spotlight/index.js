import React from 'react'
import styled from 'styled-components'

import { Sprite } from '../Sprite'
import { InfoPanel } from '../InfoPanel'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`
Container.displayName = 'Container'

const SpriteContainer = styled.div`
  align-items: center;
  border: 2px solid darkgrey;
  border-radius: 3px;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 200px;
`
SpriteContainer.displayName = 'SpriteContainer'

export const Spotlight = ({ id }) => (
  <Container>
    <SpriteContainer>
      <Sprite id={151} />
    </SpriteContainer>
    <InfoPanel />
  </Container>
)
Spotlight.displayName = 'Spotlight'
