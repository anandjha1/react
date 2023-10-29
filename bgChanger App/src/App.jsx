import { useState } from 'react'
// import './App.css'

function App() {
 const [bgColor, setBgColor] = useState('')

  return (
    <>
      <div style={{backgroundColor: bgColor}}>
        <h1>Change Background</h1>
        <button onClick={()=>setBgColor("green")}>Green</button>
        <button onClick={()=>setBgColor("red")}>Red</button>
        <button onClick={()=>setBgColor("blue")}>Blue</button>
        <button onClick={()=>setBgColor("white")}>White</button>
      </div>
    </>
  )
}

export default App
