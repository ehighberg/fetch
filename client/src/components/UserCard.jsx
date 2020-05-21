import React from 'react'
import Presence from './Presence'

export default function UserCard(props)
{
    console.log(props.user)

    let user = props.user
    let presence = user.presence
    let manager = props.manager


    return (
        <div className='flex flex-row m-2 py-4 bg-gray-200'>
            <div className='w-5 h-3 m-2'>
                <Presence
                    presence={presence}
                />
            </div>
            <div className="mr-4">
                <div className={`p-1 rounded-full ${manager ? 'bg-purple-700' : 'bg-yellow-400'}`}>
                    <img className='rounded-full' src={user.avatar}></img>
                </div>
            </div>
            <div className='m-0 w-full'>
                <div>{user.name}</div>
                <div>{user.title}</div>
                <div>{user.pronouns}</div>
            </div>
        </div>
    )
}
