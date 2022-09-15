import React, { useEffect, useState } from 'react'
import EffectChild from './EffectChild';

function EffectSample() {

  const [counter, setcounter] = useState(0);
  const [counter2, setcounter2] = useState(0);


  //BİR KEZ ÇALIŞIR _ BOŞ ARRAY
  useEffect(() => {
    console.log('Parent component useEffect');
  }, [])


    useEffect(() => {
      console.log('Parent component useEffect with dependency');
    }, [counter2]);


  return (<>
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </div>
    <div>
      <h1>{counter2}</h1>
      <button onClick={() => setcounter2(counter2 + 1)}>Increase - 2</button>

    </div>
  </>
  )
}

export default EffectSample