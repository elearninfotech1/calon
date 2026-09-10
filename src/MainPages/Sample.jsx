import React, { useMemo, useState } from 'react'

const Sample = () => {
  const [counter, setCounter] = useState(1);
  const [number, setNumber] = useState(4);

  const squre = (num) => {
    console.log("executed");
    
    return num*num
 }
  
  const result = useMemo(() => {
    squre(number)
  },[number]);

  console.log("counter");
  

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>click me</button>
      <h1>Squre of {number} : {result}</h1>
      <button onClick={()=>setNumber(number+1)}>Click me</button>
    </div>
  )
}

export default Sample