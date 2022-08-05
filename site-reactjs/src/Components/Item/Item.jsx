import React from 'react'

const Item = ({text, input}) => {
  return (
        <div>
            <small>{text}</small>
            <p>{input}</p>
        </div>
  )
}

export default Item