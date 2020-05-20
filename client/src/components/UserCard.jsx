import React from 'react'
import UserProfile from './UserProfile'
import { Link } from 'react-router-dom'

export default function UserCard(props) {
    console.log(props.user)

    let user = props.user

    return (
        <div className='flex flex-row m-2 bg-gray-200'>
            <div>{user.presence}</div>
            <img className='w-20 mr-16' src={user.avatar}></img>
            <div className='m-0 w-full'>
                <div>{user.name}</div>
                <div>{user.title}</div>
                <div>pronouns</div>
            </div>
        </div>
    )
}
