import React from "react"
import { Link } from "react-router-dom"

export default function FourNaughtFour() {
  return (
    <div>
      Ooops, page note found, go back{" "}
      <Link className=" underline text-blue-500" to="/">
        Home
      </Link>
    </div>
  )
}
