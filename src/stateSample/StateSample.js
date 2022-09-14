import React, { useState } from 'react'


function StateSample() {

    
    console.log('State Sample rendered! ');
    
    //HOOK
    const [firstName, setfirstName] = useState('Çağatay');
   
    //my onclick event
    const changeName = () => {
        setfirstName('Bahram');
    }

    return (
        <>
            <h1>Name: {firstName}</h1>
            <h1>Length: {firstName.length}</h1>
            <button onClick={() => changeName()}>Change Name</button>
        </>
    )
}

export default StateSample


//two way binding?
//virtual dom
//one way binding  YOK
//state management