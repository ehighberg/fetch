import React from "react"
import { Link } from "react-router-dom"

export default function RoomCard({ roomName, roomId }) {
  return (
    <>
      <Link className="block m-1" to={`/rooms/${roomId}`}>
        <div className="border-gray-500 rounded border p-1 text-xs">
          {roomName}
        </div>
      </Link>
    </>
  )
}
