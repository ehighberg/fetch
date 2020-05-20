import React from 'react'
import UserProfile from './UserProfile'

export default function UserCard(props) {
    console.log(props.user)

    return (
        <div>
            User Card
            <UserProfile
                user={props.user}
            />
        </div>
    )
}
