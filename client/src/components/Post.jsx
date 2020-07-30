import React from "react"

export default function Post(props) {
  const { content, user, room_id } = props.post

  return (
    <div
      className={`flex flex-col py-2 rounded border-b-2 
        ${user.id === room_id ? "justify-start" : "justify-end"} 
        ${user.id === room_id ? "text-left" : "text-right"}`}
    >
      <div>
        <div className="text-gray-400">
          {user.id === room_id ? user.name : "You"}
        </div>
        <div className="bg-gray-100">{content}</div>
      </div>
    </div>
  )
}
