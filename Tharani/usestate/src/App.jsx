import React, { useState } from 'react'

const App = () => {
  // let count=0
  let[count,setCount] = useState(0)
  let[val,setVal] = useState("")
  let[bg,setBg] = useState("dark")
  const addCount = ()=>{
    setCount(++count)
    // count = count+1
    console.log(count);
    
  }

  return (
    <div className='App' style={{width:"100%",height:"100vh",backgroundColor:bg==="dark"?"black":"white"}}>
      <p>{count}</p>
      <p>{val}</p>
      <button onClick={addCount}>Add</button>
      <input type='text' onChange={(e)=>setVal(e.target.value)} ></input>
      <button onClick={()=>setBg(bg==="dark"?"light":"dark")}>{bg}</button>
      <select>
        <option>5</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
  )
}

export default App