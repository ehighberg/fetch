import React from 'react'

export default function UserCard(props) {
    console.log(props.user)

    let user = props.user

    let presence = user.presence

    let showPresence = (presence) => {
        if (presence == 'online') {
            return (
                <div className='rounded-full bg-green-500 w-5 h-3 m-2'></div>
            )
        } else if (presence == 'offline') {
            return (
                <div className='rounded-full bg-red-500 w-5 h-3 m-2'></div>
            )
        } else {
            return (
                <div className='rounded-full bg-yellow-500 w-5 h-3 m-2'></div>
            )
        }
    }
    


    return (
        <div className='flex flex-row m-2 bg-gray-200'>
            {showPresence(presence)}
            <div className='w-64'>
                <img className='w-2\/3 rounded-full m-4' src={user.avatar}></img>
            </div>
            <div className='m-0 w-full'>
                <div>{user.name}</div>
                <div>{user.title}</div>
                <div>pronouns</div>
            </div>
        </div>
    )
}
