import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Sprite from './Sprite'

const Button = styled.button`
  display: flex;
  flex-direction: row;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`

const Number = styled.div`
  /* border-radius: 3px; */
  /* background-color: lightgrey; */
  padding: 5px;
  font-weight: 600;
`

const Name = styled.span`
  font-size: 14px;
  text-transform: capitalize;
  color: black;
  margin-left: 8px;
`

const ListItem = ({ id, name, url, onClick }) => {
  const formattedId = ('000' + id).slice(-3)
  return (
    <Button onClick={() => onClick(url)}>
      <Sprite id={id} />
      <InfoContainer>
        <Number>#{formattedId}</Number>
        <Name>{name}</Name>
      </InfoContainer>
    </Button>
  )
}

ListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.string,
}

export default ListItem
