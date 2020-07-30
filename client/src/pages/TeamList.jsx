import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getTeams } from "../services/APIHelper"
import UserList from "../components/UserList"
import DotLink from "../components/DotLink"

import DOGBG from "../assets/Images/Department dog background small.png"
import DOG from "../assets/Images/DOG FETCH 2.gif"

export default function TeamList() {
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
      <div className="font-poppins text-2xl text-center text-purple-700 uppercase py-6">
        Teams
      </div>

      <div className="flex justify-center">
        <div
          className="flex h-56 justify-center w-full"
          style={{
            backgroundImage: `url(${DOGBG})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "267px 174px",
          }}
        >
          <img className=" h-48 object-cover" src={DOG}></img>
        </div>
      </div>

      <div id="team-list">
        {teamList &&
          teamList.map((team) => {
            const teamId = team.id
            return (
              <Link
                to={`/teams/${teamId}`}
                key={teamId}
                className="flex flex-row w-4/5 text-2xl mx-auto justify-between border-b-2 my-4"
              >
                <p>{team.name}</p>
                <DotLink />
              </Link>
            )
          })}
      </div>
      <div className="font-poppins text-2xl text-center text-purple-700 uppercase py-6">
        Team Managers
      </div>
      <div id="manager-list">
        {teamList[0] && (
          <UserList
            userIds={teamList.map((team) => team.manager_id)}
            teamList={teamList}
          />
        )}
      </div>
    </div>
  )
}
