import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {

    console.log('Parent comp rendered');
    const [counter, setcounter] = useState(0)

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
        <ChildComponent/>
    </>
    )
}

export default ParentComponent