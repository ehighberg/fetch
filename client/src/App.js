import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'


import './css/style.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import Trev from './pages/Trev'
import Tara from './pages/Tara'
import UserProfile from './components/UserProfile'
import UserList from './components/UserList'



const App = () =>
{
  const [searchResults, setSearchResults] = useState([])

  return (
    <>
      <Nav setSearchResults={setSearchResults}/>
      <Switch>
        <Route exact path="/" render={(props) => (<Home {...props} />)} />
        <Route exact path="/tara" render={(props) => (<Tara {...props} />)} />
        <Route exact path="/trev" render={(props) => (<Trev {...props} />)} />
        <Route exact path="/users" render={(props) => (<UserList {...props} />)} />
        <Route exact path="/users/:id" render={(props) => (<UserProfile {...props} />)} />
        <Route exact path="/results" render={(props) => (
            <SearchResults {...props} searchResults={searchResults} setSearchResults={setSearchResults} />
        )} />
      </Switch>
    </>
  )
}

export default App
