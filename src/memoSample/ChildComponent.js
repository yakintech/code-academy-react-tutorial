import React from 'react'

function ChildComponent() {

    console.log('Child rendered');
    let cities = ['İzmir', 'istanbul']

  return (<>
    <h1>Çağatay</h1>
  </>
  )
}

export default React.memo(ChildComponent)