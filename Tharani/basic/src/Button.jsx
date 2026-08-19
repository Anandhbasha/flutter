import React from 'react'

const Button = (props) => {
  return (
    <div className='Button'>
        <button style={{backgroundColor:props.x}}>{props.value}</button>
    </div>
  )
}

export default Button