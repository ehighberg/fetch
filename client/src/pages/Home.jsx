import React, { useEffect, useState } from 'react'

import { useHistory, Link } from 'react-router-dom'

import { getUserById, getTeamWithDetail, getManyUsersById } from '../services/APIHelper.js'
import SearchBar from '../components/SearchBar'
import DataDogLogo from '../assets/Icons/Datadog_Logo.png'
import AvatarSmall from '../components/AvatarSmall'

export default function Home(props)
{
  const history = useHistory()

  const [user, setUser] = useState(null)
  const [team, setTeam] = useState(null)
  const [recentChatsUsers, setRecentChatsUsers] = useState([])

  const userId = localStorage.getItem('userId')
  if (!userId)
  {
    history.push("/login")
  }
  let teamId = 1


  useEffect(() =>
  {
    getData()
  }, [])

  const getData = async () =>
  {
    let newUser = await getUser(userId)
    let newTeam = await getTeam(newUser.team_id)
    // Hardcodec recent chats (same for all users)
    let newChats = await getManyUsersById([1, 4, 2, 5, 3, 10, 11, 3, 17])
    setUser(newUser)
    setTeam(newTeam)
    setRecentChatsUsers(newChats)
  }

  const getUser = async (id) =>
  {
    let newUser = await getUserById(id)
    return newUser
  }

  const getTeam = async (id) =>
  {
    let newTeam = await getTeamWithDetail(id)
    return newTeam
  }



  return (
    <div className="flex flex-col items-center text-center bg-gray-100">
      <div className=" font-poppins my-6 text-purple-700 text-2xl uppercase">
        Home
      </div>
      <div className="w-48">
        <img src={DataDogLogo}></img>
      </div>

      {localStorage.getItem('userId') && (
        <div className="w-full px-8">
          <SearchBar
            setSearchResults={props.setSearchResults}
          />
          <div className='text-2xl font-poppins mt-6 text-purple-700'>Company Directory</div>
          <div className='mt-4'>
            <Link to='/teams' className='flex flex-row w-4/5 text-2xl font-roboto text-purple-700 mx-auto justify-between border-b-2 py-6'>
              <div className="font-bold">Departments</div>
              <div>ICON</div>
            </Link>
            <Link to='/teams' className='flex flex-row w-4/5 text-2xl font-roboto text-purple-700 mx-auto justify-between border-b-2 py-6'>
              <div className="font-bold">Teams</div>
              <div>ICON</div>
            </Link>
            <Link to='/users' className='flex flex-row w-4/5 text-2xl font-roboto text-purple-700 mx-auto justify-between border-b-2 py-6'>
              <div className="font-bold">People</div>
              <div>ICON</div>
            </Link>
          </div>
          <div className='text-2xl font-poppins my-8 text-purple-700'>Recent Chats</div>
          <div className=" overflow-x-scroll">
            <div className="inline-flex">
              {recentChatsUsers.map((user, index) => (
                <div key={index} className="m-2 rounded-full w-20">
                  <AvatarSmall className="object-cover object-top" user={user} />
                </div>
              ))}
            </div>
          </div>
          <div className='text-2xl font-poppins my-8 text-purple-700'>Your Team</div>
          <div className=" overflow-x-scroll">
            <div className="inline-flex">
              {team && team.users.map((user, index) => (
                <div key={index} className="m-2 rounded-full w-20 h-20">
                  <AvatarSmall className="w-20 h-20" user={user} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <button onClick={() =>
      {
        localStorage.removeItem('userId')
        history.push('/')
      }}
        className='bg-purple-700 text-white border-2 border-purple-700 rounded-full w-1/4 p-2 mx-auto mt-8'
      >
        Logout
        </button>
    </div>
  )
}
