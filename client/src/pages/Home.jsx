import React, { useEffect, useState } from "react"

import { useHistory, Link } from "react-router-dom"
import Tap from "react-interactions"

import {
  getUserById,
  getTeamWithDetail,
  getManyUsersById,
} from "../services/APIHelper.js"
import SearchBar from "../components/SearchBar"
import DataDogLogo from "../assets/Icons/Datadog_Logo.png"
import AvatarSmall from "../components/AvatarSmall"
import DotLink from "../components/DotLink"

export default function Home(props) {
  const history = useHistory()

  const [team, setTeam] = useState(null)
  const [recentChatsUsers, setRecentChatsUsers] = useState([])

  const userId = localStorage.getItem("userId")
  if (!userId) {
    history.push("/login")
  }

  useEffect(() => {
    if (userId) {
      getData()
    }
  }, [])

  const getData = async () => {
    let newUser = await getUser(userId)
    let newTeam = await getTeam(newUser.team_id)
    // Hardcodec recent chats (same for all users)
    let newChats = await getManyUsersById([2, 3])
    setTeam(newTeam)
    setRecentChatsUsers(newChats)
  }

  const getUser = async (id) => {
    let newUser = await getUserById(id)
    return newUser
  }

  const getTeam = async (id) => {
    let newTeam = await getTeamWithDetail(id)
    let filterCurrenUserFromTeam = newTeam.users.filter(
      (user) => parseInt(user.id) !== parseInt(userId)
    )
    newTeam.users = [newTeam.manager, ...filterCurrenUserFromTeam]
    return newTeam
  }

  return (
    <div className="flex flex-col items-center text-center bg-gray-100 pt-20">
      <div className="w-48 pb-6">
        <img className="w-48 ml-4" src={DataDogLogo} alt="logo"></img>
      </div>

      {localStorage.getItem("userId") && (
        <div className="w-full px-8">
          <div className="text-2xl font-poppins my-6 text-purple-700">
            Company Directory
          </div>
          <SearchBar setSearchResults={props.setSearchResults} />

          <div className="mt-4">
            <Link
              to="/teams"
              className="flex flex-row w-4/5 text-2xl font-roboto text-purple-700 mx-auto mt-24 justify-between border-b-2 py-6"
            >
              <div className="font-bold">Departments</div>
              <DotLink />
            </Link>
            <Link
              to="/teams"
              className="flex flex-row w-4/5 text-2xl font-roboto text-purple-700 mx-auto justify-between border-b-2 py-6"
            >
              <div className="font-bold">Teams</div>
              <DotLink />
            </Link>
            <Link
              to="/users"
              className="flex flex-row w-4/5 text-2xl font-roboto text-purple-700 mx-auto justify-between border-b-2 py-6"
            >
              <div className="font-bold">People</div>
              <DotLink />
            </Link>
          </div>
          <div className="text-2xl font-poppins my-8 text-purple-700">
            Recent Chats
          </div>
          <div className=" overflow-x-scroll h-32">
            <div className="inline-flex">
              {recentChatsUsers.map((user, index) => (
                <div key={index} className="my-2 mx-3 rounded-full w-20 h-20">
                  <Link to={`/rooms/${user.id}`}>
                    <AvatarSmall
                      className="object-cover object-top"
                      user={user}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="text-2xl font-poppins my-8 text-purple-700">
            Your Team
          </div>
          <div className=" overflow-x-scroll h-32">
            <div className="inline-flex">
              {team &&
                team.users.map((user, index) => (
                  <div key={index} className="my-2 mx-3 rounded-full w-20 h-20">
                    <Link to={`/users/${user.id}`}>
                      <AvatarSmall className="w-20 h-20" user={user} />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          localStorage.removeItem("userId")
          history.push("/")
        }}
        className="focus:outline-none bg-purple-700 text-white border-2 border-purple-700 rounded-full w-1/4 p-2 mx-auto mt-8"
      >
        Logout
        <Tap scale waves fade />
      </button>
    </div>
  )
}
