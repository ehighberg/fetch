import React from 'react'
import Presence from './Presence'

export default function Post(props)
{
    const { content, user } = props.post

    return (
        <div className="flex border-gray-500 rounded border">
            <div className="flex bg-gray-300 w-1/4">
                <img className='rounded-full w-10' src={user.avatar}></img>
                <Presence />
                <div>{user.name}</div>
            </div>
            <div className="flex bg-gray-200 w-3/4">
                {content}
            </div>
        </div>
    )
}
