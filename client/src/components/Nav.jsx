import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Nav(props) {
  const history = useHistory()

  return (
    <nav className='bg-purple-700 text-white flex flex-row justify-between p-6 fixed bottom-0 w-screen my-box-shadow'>
        <button onClick={() => history.goBack()}>Back</button>
        <button onClick={() => history.push('/')}>Home</button>
        <button onClick={() => null}>HAMBURGER</button>
    </nav>
  )
}
