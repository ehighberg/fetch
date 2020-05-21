import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Nav(props) {
  const history = useHistory()

  return (
    <nav>
        <button onClick={() => history.goBack()}>Back</button>
        <button onClick={() => history.push('/')}>Home</button>
        <button onClick={() => null}>HAMBURGER</button>
    </nav>
  )
}
