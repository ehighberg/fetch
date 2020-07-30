import React from "react"
import { NavLink } from "react-router-dom"

export default function ProfileNav(props) {
  let dotStyle = "bg-transparent border rounded-full hover:bg-white w-4 h-4"

  return props.user ? (
    <div className="flex flex-row justify-evenly w-1/4 m-auto mt-4">
      <NavLink
        activeClassName="bg-purple-100"
        className={`${dotStyle}`}
        exact
        to={`/users/${props.user.id}`}
      ></NavLink>
      <NavLink
        activeClassName="bg-purple-100"
        className={`${dotStyle}`}
        exact
        to={`/users/${props.user.id}/page2`}
      ></NavLink>
      <NavLink
        activeClassName="bg-purple-100"
        className={`${dotStyle}`}
        exact
        to={`/users/${props.user.id}/page3`}
      ></NavLink>
      <NavLink
        activeClassName="bg-purple-100"
        className={`${dotStyle}`}
        exact
        to={`/users/${props.user.id}/page4`}
      ></NavLink>
    </div>
  ) : (
    ""
  )
}
