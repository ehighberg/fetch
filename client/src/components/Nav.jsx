import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Nav(props) {
  const history = useHistory()

  return (
    <nav className='bg-purple-700 text-white flex flex-row justify-between p-6 fixed bottom-0 w-screen my-box-shadow'>
        <button onClick={() => history.goBack()}>
          <img src={require('../assets/Icons/Vector-2.png')} alt='back button' />
        </button>
        <button onClick={() => history.push('/')}>
          <img src={require('../assets/Icons/Vector.png')} alt='home button' />
        </button>
        <button onClick={() => null}>
          <img src={require('../assets/Icons/Vector-1.png')} alt='menu button' />
        </button>
    </nav>
  )
}
