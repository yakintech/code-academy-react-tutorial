import React, { useState } from 'react'

function StateInputValue() {

    const [cityName, setcityName] = useState('');
    const [citites, setcitites] = useState([]);

    return (
        <>
            <div>
                <label>City:</label>
                <input type='text' onChange={(e) => setcityName(e.target.value)} />
            </div>
            <div>
                <button onClick={() => setcitites([...citites, cityName])}>Add</button>
            </div>
            <div>
                <ul>
                    {
                        citites && citites.map((item, key) => <li key={key}>{item}</li>)
                    }
                </ul>
            </div>


        </>
    )
}

export default StateInputValue