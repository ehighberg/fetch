import React, { useState } from "react"
import { Switch, Route, withRouter } from "react-router-dom"

import "./css/style.css"
import "react-interactions/dist/main.css"

import Nav from "./components/Nav"
import Home from "./pages/Home"
import SearchResults from "./pages/SearchResults"
import Team from "./pages/Team"
import TeamList from "./pages/TeamList"
import RoomListPage from "./pages/RoomListPage"
import RoomPage from "./pages/RoomPage"
import UserList from "./components/UserList"
import UserProfile from "./pages/UserProfile"
import UserProfilePage2 from "./pages/UserProfilePage2"
import UserProfilePage3 from "./pages/UserProfilePage3"
import UserProfilePage4 from "./pages/UserProfilePage4"
import FourNaughtFour from "./pages/FourNaughtFour"
import Login from "./pages/Login"

import ActionCable from "actioncable"
import { wsUrl } from "./services/APIHelper"
let cable = ActionCable.createConsumer(wsUrl)

const App = (props) => {
  const [searchResults, setSearchResults] = useState([])
  let locationLoginTrue = props.location.pathname === "/login"

  return (
    <div className="iphone-size bg-white min-h-screen">
      {/* Don't add padding bottom 32 if you are on the login route */}
      <div className={locationLoginTrue ? "" : "pb-32"}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} setSearchResults={setSearchResults} />
            )}
          />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/results"
            render={(props) => (
              <SearchResults {...props} searchResults={searchResults} />
            )}
          />
          <Route
            exact
            path="/teams/"
            render={(props) => <TeamList {...props} />}
          />
          <Route
            exact
            path="/teams/:id"
            render={(props) => <Team {...props} />}
          />
          <Route
            exact
            path="/rooms/"
            render={(props) => <RoomListPage {...props} />}
          />
          <Route
            exact
            path="/rooms/:id"
            render={(props) => <RoomPage {...props} cable={cable} />}
          />
          <Route
            exact
            path="/users"
            render={(props) => <UserList {...props} />}
          />

          <Route
            exact
            path="/users/:id"
            render={(props) => <UserProfile {...props} />}
          />
          <Route
            exact
            path="/users/:id/page2"
            render={(props) => <UserProfilePage2 {...props} />}
          />
          <Route
            exact
            path="/users/:id/page3"
            render={(props) => <UserProfilePage3 {...props} />}
          />
          <Route
            exact
            path="/users/:id/page4"
            render={(props) => <UserProfilePage4 {...props} />}
          />

          {/* Catch all route below incase things go awry */}
          <Route path="/" render={(props) => <FourNaughtFour {...props} />} />
        </Switch>

        {/* Don't show the nav bar on the login page */}
        <Switch>
          <Route exact path="/login" />
          <Route exact path="/rooms/:id" />
          <Route
            path="/"
            render={(props) => (
              <Nav {...props} setSearchResults={setSearchResults} />
            )}
          />
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(App)
