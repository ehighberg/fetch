import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getTeams } from '../services/APIHelper'
import UserList from '../components/UserList'

export default function TeamList()
{
  const [teamList, setTeamList] = useState([])

  const fetchTeams = async () => {
    const teams = await getTeams()
    setTeamList(teams)
  }

  useEffect(() => {
    fetchTeams()
  }, [])

  return (
      <div>
          <div className="font-poppins text-2xl text-center text-purple-700 uppercase py-6">Teams</div>
          <div id='team-list'>
            {teamList && (
              teamList.map((team) => {
                const teamId = team.id
                return (
                  <Link to={`/teams/${teamId}`} key={teamId} className='flex flex-row w-3/5 text-2xl mx-auto justify-between border-b-2 my-4'>
                    <p>{team.name}</p>
                    <p>ICON</p>
                  </Link>
                )
              })
            )}
          </div>
          <div id='manager-list'>
            {teamList[0] && (
              <UserList
                userIds={teamList.map(team => team.manager_id)}
                teamList={teamList}
              />
            )}
          </div>
      </div>
  )
}
