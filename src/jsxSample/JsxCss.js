import React from 'react'

function JsxCss() {

    let h1Color = {
        color:'tomato',
        fontSize:60
    }

  return (
    <>
        <h1 style={h1Color}>Bakü</h1>
        <h2 style={{color:'blue',fontSize:50}}>İstanbul</h2>
    </>
  )
}

export default JsxCss