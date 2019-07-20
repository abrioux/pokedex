import React from 'react'
import styled from 'styled-components'

const CRIMSON = `#dc092d`
const DARK_CRIMSON = `#89061c`

const BORDER_STYLING = `12px solid ${DARK_CRIMSON}`

const TopBar = styled.div`
  /* border: 1px solid black; */
  box-sizing: border-box;
  display: flex;
  height: 20%;
  overflow: hidden;
`

const Left = styled.div`
  border-bottom: ${BORDER_STYLING};
  flex: 2 1 auto;
`

const Middle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  overflow: hidden;
`

const SlantedDiv = styled.div`
  background-color: ${DARK_CRIMSON};
  height: 9px;
  overflow: hidden;
  position: relative;
  top: 25px;
  transform: rotate(-40deg);
  width: 140%;
`

const Right = styled.div`
  border-bottom: ${BORDER_STYLING};
  flex: 3 1 auto;
  height: 40%;
`

const DexWrapper = styled.div`
  background-color: ${CRIMSON};
  border-radius: 25px 0px 0px 25px;
  height: 625px;
  width: 450px;
  /* box-shadow: -6px 0 0 0 ${CRIMSON}, 6px 0 0 0 ${CRIMSON}, 0 0 0 4px ${CRIMSON},
    0 -6px 0 2px ${CRIMSON}, 0 6px 0 2px ${CRIMSON}, 0 -10px 0 0 ${CRIMSON},
    0 10px 0 0 ${CRIMSON}, 0 -14px 0 -2px ${CRIMSON}, 0 14px 0 -2px ${CRIMSON},
    0 -18px 0 -4px ${CRIMSON}, 0 18px 0 -4px ${CRIMSON},
    0 -24px 0 -8px ${CRIMSON}, 0 24px 0 -8px ${CRIMSON},
    0 -30px 0 -12px ${CRIMSON}, 0 30px 0 -12px ${CRIMSON}; */
`

export const Pokedex = () => (
  <DexWrapper>
    <TopBar>
      <Left />
      <Middle>
        <SlantedDiv />
      </Middle>
      <Right />
    </TopBar>
  </DexWrapper>
)
