import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosPlaceHolder } from './axiosInstance';

function ToDoPageWithAxios() {

  const [todos, settodos] = useState([]);


  useEffect(() => {


    axiosPlaceHolder.get('todos')
      .then(res => {
        console.log('DATA', res.data);
      })
      .catch(err => console.log('err', err))

  }, [])


  return (<>

  </>
  )
}

export default ToDoPageWithAxios