import React from "react"
import Presence from "./Presence"

export default function AvatarSmall(props) {
  let user = props.user
  let manager = props.manager

  return (
    <>
      <div className="mx-auto">
        <div className="w-2 h-2 -mr-3 -mb-3">
          <Presence presence={user.presence} />
        </div>
        <div
          className={`w-20 h-20 rounded-full border overflow-hidden ${
            manager ? "border-purple-700" : "border-yellow-400"
          }`}
        >
          <img
            className="w-20 object-cover object-top  rounded-full"
            src={user.avatar}
            alt="avatar"
          ></img>
        </div>
      </div>
    </>
  )
}
