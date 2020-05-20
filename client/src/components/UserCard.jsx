import React from 'react'
import UserProfile from './UserProfile'

export default function UserCard(props) {
    console.log(props.user)

    let user = props.user

    return (
        <div className='flex flex-row flex-wrap bg-gray-200 m-0 w-64'>
            {user.name}
            <UserProfile
                user={user}
            />
        </div>
    )
}
