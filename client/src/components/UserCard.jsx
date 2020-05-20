import React from 'react'
import Presence from './Presence'

export default function UserCard(props) {
    console.log(props.user)

    let user = props.user
    let presence = user.presence    

    return (
        <div className='flex flex-row m-2 bg-gray-200'>
            <Presence
                presence={presence}
            />
            <div className='w-64'>
                <img className='w-2\/3 rounded-full m-4' src={user.avatar}></img>
            </div>
            <div className='m-0 w-full'>
                <div>{user.name}</div>
                <div>{user.title}</div>
                <div>{user.pronouns}</div>
            </div>
        </div>
    )
}
