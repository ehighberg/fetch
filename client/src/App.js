import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './css/style.css'
import Home from './pages/Home'
import Errol from './pages/Errol'
import Trev from './pages/Trev'
import Tara from './pages/Tara'



const App = () =>
{
  return (
    <>
      <Switch>
        <Route exact path="/" render={(props) => (<Home {...props} />)} />
        <Route exact path="/tara" render={(props) => (<Tara {...props} />)} />
        <Route exact path="/errol" render={(props) => (<Errol {...props} />)} />
        <Route exact path="/trev" render={(props) => (<Trev {...props} />)} />
      </Switch>
    </>
  )
}

export default App
