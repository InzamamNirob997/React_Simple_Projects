import React, { useState } from 'react'
import './index.css'

const App= () => {

  const [counter, setCounter] = useState(0)
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1)
  }

  const reset =()=>{
    setCounter(0)
  }



  return (
    <div className='counterApp'>
          <h1>Counter APP</h1>
             <h2>{counter}</h2>
          <button onClick={handleClick1}>Increase</button>
          <button onClick={handleClick2}>Decrease</button>
          <button onClick={reset}>Reset</button>
   

    </div>
     




 
      
  )
}







  

export default App;



































