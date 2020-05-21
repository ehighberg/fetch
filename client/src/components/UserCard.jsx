import React from 'react'
import Presence from './Presence'

export default function UserCard(props) {
    console.log(props.user)

    let user = props.user
    let presence = user.presence    

    return (
        <div className='flex flex-row m-2 py-4 bg-gray-200'>
            <div className='w-5 h-3 m-2'>
                <Presence
                    presence={presence}
                />
            </div>
            <div className='w-32'>
                <img className='w-2\/3 rounded-full mt-4' src={user.avatar}></img>
            </div>
            <div className='m-0 w-full'>
                <div>{user.name}</div>
                <div>{user.title}</div>
                <div>{user.pronouns}</div>
            </div>
        </div>
    )
}
