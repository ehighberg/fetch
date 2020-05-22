import React from 'react'
import Presence from './Presence'
import DotLink from './DotLink'

export default function UserCard(props)
{
    console.log(props.user)

    let user = props.user
    let presence = user.presence
    let manager = props.manager


    return (
        <div className='flex flex-row mx-2 py-4 bg-gray-100 border-b-2'>
            <div className='w-5 h-3 m-2'>
                <Presence
                    presence={presence}
                />
            </div>
            <div className="mr-4">
                <div className={`p-1 rounded-full ${manager ? 'bg-purple-700' : 'bg-yellow-400'}`}>
                    <img className='rounded-full w-32' src={user.avatar} alt='avatar'></img>
                </div>
            </div>
            <div className='m-0 w-full'>
                <div className=' font-roboto font-medium text-purple-700 text-lg'>{user.name}</div>
                <div className='capitalize'>{user.title}</div>
                <div>{user.pronouns}</div>
            </div>

            <DotLink />
        </div>
    )
}
