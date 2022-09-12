import React from 'react'

function JsxEvents() {

    const clickMe = () => {
        alert('Click Me!!')
    }

    const changeCountry = (e) => {

        console.log('e', e.target);

    }

  return (
    <>
        <h1 onClick={clickMe}>Click!!</h1>
        <h1 onClick={() => clickMe()}>Click!!</h1>
        <select onChange={(e) => changeCountry(e)}>
            <option>Türkiye</option>
            <option>Rusya</option>
        </select>
    </>
  )
}

export default JsxEvents