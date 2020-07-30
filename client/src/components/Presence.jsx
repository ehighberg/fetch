import React from "react"

export default function Presence(props) {
  let presence = props.presence
  let color

  if (presence === "online") {
    color = "bg-green-400"
  } else if (presence === "offline") {
    color = "bg-red-600"
  } else {
    color = "bg-yellow-400"
  }

  return <div className={`rounded-full ${color} w-full h-full`}></div>
}
