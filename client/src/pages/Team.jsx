import React, { useState, useEffect } from "react"
import { getTeamWithDetail } from "../services/APIHelper"
import UserList from "../components/UserList"

import DOGBG from "../assets/Images/Team dog background.png"
import DOG from "../assets/Images/DOG FETCH 1.gif"

export default function Team(props) {
  let { id } = props.match.params

  const [teamDetail, setTeamDetail] = useState([])
  const [userIds, setUserIds] = useState(null)

  useEffect(() => {
    getTeamDetails()
  }, [])

  const getTeamDetails = async () => {
    let teamWithDetailsResponse = await getTeamWithDetail(id)
    setTeamDetail(teamWithDetailsResponse)

    let x = teamWithDetailsResponse.users.map((user) => user.id)
    setUserIds(x)
  }

  return (
    <div>
      <div className="font-poppins text-2xl text-center text-purple-700 uppercase py-6">
        {teamDetail.name} Department
      </div>
      <div className="flex justify-center">
        <div
          className="flex h-56 justify-center w-full"
          style={{
            backgroundImage: `url(${DOGBG})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "267px 163px",
          }}
        >
          <img className=" h-48 object-cover" src={DOG}></img>
        </div>
      </div>
      {userIds ? (
        <UserList
          userIds={userIds}
          managerId={teamDetail.manager && teamDetail.manager.id}
        />
      ) : (
        ""
      )}
    </div>
  )
}
