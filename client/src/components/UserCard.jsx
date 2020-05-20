import React from 'react'
import UserProfile from './UserProfile'
import { Link } from 'react-router-dom'

export default function UserCard(props) {
    console.log(props.user)

    let user = props.user

    return (
        <div className='flex flex-row flex-wrap bg-gray-200 m-0 w-64'>
            {user.name}
            <Link to={`/users/${user.id}`}
            >
            <UserProfile
                user={user}
            />
            </Link>
        </div>
    )
}
