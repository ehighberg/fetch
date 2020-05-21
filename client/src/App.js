import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'


import './css/style.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Team from './pages/Team'
import TeamList from './pages/TeamList'
import RoomListPage from './pages/RoomListPage'
import RoomPage from './pages/RoomPage'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import UserProfilePage2 from './pages/UserProfilePage2'
import UserProfilePage3 from './pages/UserProfilePage3'
import FourNaughtFour from './pages/FourNaughtFour'

import ActionCable from 'actioncable'
import { wsUrl } from './services/APIHelper'
let cable = ActionCable.createConsumer(wsUrl)

const App = () =>
{
  const [searchResults, setSearchResults] = useState([])

  return (
    <>
      <Nav setSearchResults={setSearchResults}/>
      <Switch>
        <Route exact path="/" render={(props) => (<Home {...props} />)} />
        <Route exact path="/results" render={(props) => (
            <SearchResults {...props} searchResults={searchResults} setSearchResults={setSearchResults} />
        )} />
        <Route exact path="/teams/" render={(props) => (<TeamList {...props} />)} />
        <Route exact path="/teams/:id" render={(props) => (<Team {...props} />)} />
        <Route exact path="/rooms/" render={(props) => (<RoomListPage {...props} />)} />
        <Route exact path="/rooms/:id" render={(props) => (<RoomPage {...props} cable={cable} />)} />
        <Route exact path="/users" render={(props) => (<UserList {...props} />)} />
        <Route exact path="/users/:id" render={(props) => (<UserProfile {...props} />)} />
        <Route exact path="/users/:id/page2" render={(props) => (<UserProfilePage2 {...props} />)} />
        <Route exact path="/users/:id/page3" render={(props) => (<UserProfilePage3 {...props} />)} />

        {/* Catch all route below incase things go awry */}
        <Route path="/" render={(props) => (<FourNaughtFour {...props} />)} />
      </Switch>
    </>
  )
}

export default App
