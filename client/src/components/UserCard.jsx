import React from "react"
import Presence from "./Presence"
import DotLink from "./DotLink"

export default function UserCard(props) {
  let user = props.user
  let presence = user.presence
  let manager = props.manager

  return (
    <div className="flex flex-row mx-2 py-4 bg-gray-100 border-b-2">
      <div className="w-5 h-3 m-2">
        <Presence presence={presence} />
      </div>
      <div className="mr-4">
        <div
          className={`w-20 h-20 rounded-full border overflow-hidden ${
            manager ? "border-purple-700" : "border-yellow-400"
          }`}
        >
          <img
            className="w-20 object-cover object-top  rounded-full"
            src={user.avatar}
          ></img>
        </div>
      </div>
      <div className="m-0 w-full">
        <div className="font-roboto font-medium text-purple-700 text-lg">
          {user.name}
        </div>
        <div className="capitalize font-roboto font-light">{user.title}</div>
        <div className="font-roboto font-light">{user.pronouns}</div>
      </div>

      <DotLink />
    </div>
  )
}
