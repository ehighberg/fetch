import React from 'react'
import Presence from './Presence'

export default function UserCard(props) {
    console.log(props.user)

    let user = props.user
    let presence = user.presence    

    return (
        <div className='flex flex-row mx-2 py-4 bg-gray-100 border-b-2'>
            <div className='w-5 h-3 m-2'>
                <Presence
                    presence={presence}
                />
            </div>

            <div className='w-32'>
                <img className='w-2/3 rounded-full mt-4' src={user.avatar}></img>
            </div>

            <div className='m-0 w-full'>
                <div className='text-purple-700 text-lg'>{user.name}</div>
                <div>{user.title}</div>
                <div>{user.pronouns}</div>
            </div>

            <div className='flex flex-row justify-evenly m-6'>
                <div className='h-2 w-2 border border-purple-700 rounded-full m-1 bg-gray-400'></div>
                <div className='h-2 w-2 border border-purple-700 rounded-full m-1 bg-gray-400'></div>
                <div className='h-2 w-2 border border-purple-700 rounded-full m-1 bg-gray-400'></div>
            </div>
        </div>
    )
}
