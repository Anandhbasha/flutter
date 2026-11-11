// import React, { useRef, useState } from 'react'
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

// const App = () => {
//   const[name,setName] = useState("")
//   const nameRef = useRef(null)
//   const focusInput = ()=>{
//     nameRef.current?.focus()
//     console.log();
    
//   }
//   return (
//     <View style={style.App}>
//         <TextInput ref={nameRef} placeholder='Enter your name' style={style.input} onChangeText={setName} value={name}></TextInput>
//         <Text>Rendertext:{name}</Text>
//         <Button title='FocusName' onPress={focusInput}></Button>
//     </View>
//   )
// }

// export default App

// const style = StyleSheet.create({
//   input:{
//     borderWidth:1,
//     padding:15,
//     marginVertical:20
//   }
// })


import React, { useReducer, useState } from 'react'
import { Button, Text, View } from 'react-native'

const App = () => {
  const initailState = {
    count:0,bg:"dark"
  }
  const reducer = (state,action)=>{
    switch(action.type){
      case "count":
        return {...state,count:state.count+=1}
       case "bg":
        return{...state,bg:state.bg==="dark"?"light":"dark"}
    }
   
  }
  const[state,dispatch] = useReducer(reducer,initailState)
  return (
    <View>
      <Text>{state.count}</Text>
        <Button onPress={()=>dispatch({type:"count"})} title='AddCount'></Button>
        <Button onPress={()=>dispatch({type:"bg"})} title={state.bg}></Button>
    </View>
  )
}

export default App