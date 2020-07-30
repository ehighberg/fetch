import React from "react"

import UserCard from "../components/UserCard"
import { Link } from "react-router-dom"

export default function SearchResults(props) {
  return (
    <div className="">
      {props.searchResults.map((user, index) => (
        <Link key={index} to={`/users/${user.id}`}>
          <UserCard key={index} user={user} />
        </Link>
      ))}
    </div>
  )
}
