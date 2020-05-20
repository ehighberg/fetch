import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './css/style.css'
import Home from './pages/Home'



const App = () =>
{
  return (
    <>
      <Switch>
        <Route exact path="/" render={(props) => (<Home {...props} />)} />
      </Switch>
    </>
  )
}

export default App
