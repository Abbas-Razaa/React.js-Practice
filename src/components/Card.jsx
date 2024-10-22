import React from 'react'

const Card = (props) => {
  console.log(props.user)
  return (
    <div>Card {props.user}</div>
  )
}

export default Card