import React from "react"

export default function Status(props) {
  let user = props.user

  return user ? (
    <div>
      <div className="font-bold text-purple-700 text-lg mt-10">
        Status Updates
      </div>

      <div className="mx-12 p-2">{user.status_message}</div>

      <div id="border" className="w-1/2 mx-auto my-4 h-px bg-gray-500"></div>
    </div>
  ) : (
    ""
  )
}
