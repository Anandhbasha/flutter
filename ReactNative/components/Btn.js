import React from 'react'
import { Button } from 'react-native'

const Btn = (props) => {
  return (
    <div className='Btn'>
        <Button title={props.value}></Button>
    </div>
  )
}

export default Btn