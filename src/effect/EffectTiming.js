import React, { useEffect, useState } from 'react'

function EffectTiming() {

    const [counter, setcounter] = useState(0)
    const [counter2, setcounter2] = useState(0)


    useEffect(() => {

        setInterval(() => {
            console.log('COUNTER!!');
        }, 1000);

    }, [counter2])


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

export default EffectTiming