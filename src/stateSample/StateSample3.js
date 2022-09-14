import React, { useState } from 'react'

function StateSample3() {

    const [onlineStatus, setonlineStatus] = useState(false);

    const changeStatus = () => {
        setonlineStatus(!onlineStatus)
    }

  return (
    <>
        {
            onlineStatus == true ? <h1>User Online</h1> : <h1>User Offline</h1>
        }

        <button onClick={() => changeStatus()}>Change Online Status</button>
    </>
  )
}

export default StateSample3