import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useSwipeable } from "react-swipeable"

import { getUserById } from "../services/APIHelper"
import Avatar from "../components/Avatar"
import Status from "../components/Status"
import Contact from "../components/Contact"
import ProfileNav from "../components/ProfileNav"

export default function UserProfile(props) {
  const userId = props.match.params.id

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const res = await getUserById(userId)
    setUser(res)
  }

  const history = useHistory()
  const handlers = useSwipeable({
    onSwipedLeft: () => history.push(`/users/${userId}/page2`),
  })

  return (
    <div {...handlers} className="text-center w-full">
      <div className="text-3xl font-poppins text-purple-700 p-6 font-bold">
        PROFILE DETAILS
      </div>
      <div className="purple-gradient py-4 shadow-xl">
        <ProfileNav user={user} />
        <Avatar {...props} user={user} />
      </div>
      <Status user={user} />
      <Contact user={user} />
    </div>
  )
}
