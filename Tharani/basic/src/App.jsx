// // Must be a first letter capital
// // duplicate names dont use
// // dont use keywords
// // space dont allow in file name
// // should start with only alphabets
// function App(){ //javascript
//   // let var const
//   // number
//   // boolean
//   // string
//   // undefined
//   // array
//   // object
//   let x =10
//   return (
//     <div className="App">
//       <h1>Hello Welcome{x}</h1>
//       //hTML
//       <h1>This is React First Class</h1>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   const values = ["Click","Save","Delete","Login","Logout"]
//   return (
//     <div className='App'>
//         {values.map((x)=>{
//           return(
//             <button>{x}</button>
//           )
//         })}
//     </div>
//   )
// }

// export default App



import React from 'react'
import Button from './Button'

const App = () => {
  return (
    <div className='App'>
      <Button value = "Click"  x="blue"/>
      <Button value = "Save" x="Orange"/>
      <Button value = "Delete" x ="red"/>
      <Button value = "Login" x ="Green"/>
      <Button value = "Logout" x="Yellow" />
    </div>
  )
}

export default App
