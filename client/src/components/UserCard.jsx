import React from 'react'

export default function UserCard(props) {
    console.log(props.user)

    let user = props.user
    let presence = user.presence
    let color

    if (presence == 'online') {
        color = 'bg-green-400'
    } else if (presence == 'offline') {
        color = 'bg-red-600'
    } else {
        color = 'bg-yellow-500'
    }
    
    
    return (
        <div className='flex flex-row m-2 bg-gray-200'>
            <div className={`rounded-full ${color} w-5 h-3 m-2`}></div>
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
