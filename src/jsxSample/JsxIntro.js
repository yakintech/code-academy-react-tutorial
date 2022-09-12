import React from 'react'

function JsxIntro() {

    let name = "Çağatay"
    //one way binding!!

    let onlineStatus = false;
    let cities = ['Bakü', 'İstanbul', 'İzmir', 'Ankara']

    return (
        <>
            {
                onlineStatus == true ? <span>User Online!</span> : <span>User Offline</span>
            }
            <h1>{name.toUpperCase()}</h1>

            <ul>
                {
                    cities.forEach((item) => <li>{item}</li>)
                }
            </ul>

        </>
    )
}

export default JsxIntro