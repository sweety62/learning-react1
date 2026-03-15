
import {useState} from 'react'

import './App.css'


function App() {

  const [Counter,setCounter] = useState(15)

  const addValue = () => {
   
    
    setCounter(Counter+1);
  }
  const removeValue = () => {
    setCounter(Counter-1);
  }
  
  return (
    <>
    <h1>Chai aur code</h1>
    <h2>Counter value: {Counter}</h2>
    
    <button onClick = {addValue}>Add Value{Counter}</button>
    
    <br/>
    
    <button onClick={removeValue}>Remove value{Counter}</button>
    <p>footer:{Counter}</p>
      </>
   );
   }   
   export default App;   
          