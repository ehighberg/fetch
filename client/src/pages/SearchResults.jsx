import React, { useEffect } from 'react'

import UserCard from '../components/UserCard'

export default function SearchResults(props)
{
    return (
        <div>
            {props.searchResults.map((user, index) => {
              return <UserCard key={index} user={user} />
            })}
        </div>
    )
}
