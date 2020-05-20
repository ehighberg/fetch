import React from 'react'

export default function Post(props)
{
    const { content, user } = props.post

    return (
        <div className="flex border-gray-500 rounded border">
            <div className="flex bg-gray-300 w-1/4">
                <img src={user.avatar} />
                <div>{`${user.first_name} ${user.last_name}`}</div>
            </div>
            <div className="flex bg-gray-200 w-3/4">
                {content}
            </div>
        </div>
    )
}
