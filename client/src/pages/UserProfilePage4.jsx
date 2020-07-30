import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useSwipeable } from "react-swipeable"

import ProfileNav from "../components/ProfileNav"
import { getUserById } from "../services/APIHelper"

export default function UserProfilePage4(props) {
  const userId = props.match.params.id

  const [user, setUser] = useState([])

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const res = await getUserById(userId)
    setUser(res)
  }

  const history = useHistory()
  const handlers = useSwipeable({
    onSwipedRight: () => history.push(`/users/${userId}/page3`),
  })

  return (
    <div {...handlers} className="text-center w-full">
      <div className="text-3xl text-purple-700 p-6 font-bold">
        PROFILE DETAILS
      </div>
      <div className="purple-gradient py-4">
        <ProfileNav user={user} />
        <div className="mt-16">
          <div className="text-2xl font-bold text-white m-4">ESSENCE</div>
          <img src={require("../assets/Images/Gif 1.gif")} alt="tina dance" />
        </div>
      </div>
    </div>
  )
}
