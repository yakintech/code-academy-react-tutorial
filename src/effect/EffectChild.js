import React, { useEffect } from 'react'

function EffectChild() {
    



    useEffect(() => {
        console.log('Child component useEffect');
    }, [])

  return (
    <div>EffectChild</div>
  )
}

export default EffectChild