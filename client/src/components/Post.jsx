import React from 'react'
import Presence from './Presence'

export default function Post(props)
{
    const { content, user } = props.post

    return (
        <div className="flex border-gray-200 rounded border border-b-2">
            <div className="flex bg-gray-100 w-12">
                <img className='rounded-full w-10 h-10' src={user.avatar} alt='avatar'></img>
                <div className='w-2 h-2 absolute'>
                    <Presence className="" presence={user.presence} />
                </div>

            </div>
            <div className="w-full">
                <div>{user.name}</div>
                <div className="flex bg-gray-100">
                    {content}
                </div>
            </div>
        </div>
    )
}
