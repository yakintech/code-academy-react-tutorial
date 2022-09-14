import React, { useState } from 'react'

function StateSample2() {

    const [number, setnumber] = useState(5);

    //new reference -> 5
    //setnumber(5);

    // error:  Too many re-renders. React limits the number of renders to prevent an infinite loop.
    //console.log('Test');


    return (
        <>
            <h1>{number}</h1>
            {
                console.log('EMİL Hajizda')
            }
        </>
    )
}

export default StateSample2