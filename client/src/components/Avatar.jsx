import React from 'react'
import Presence from './Presence'

export default function Avatar(props)
{

    let user = props.user
    console.log(props)

    return (
        <div className='mt-16'>
            <div className='text-2xl font-bold text-white m-4'>{user.name}</div>
            <div className='text-white'>{user.title}</div>

            <div className='mx-auto my-10 w-64 h-64'>
                <div className='w-8 h-8 absolute'>
                    <Presence presence={user.presence} />
                </div>
                <img className='w-full rounded-full my-box-shadow' src={user.avatar}></img>
            </div>
        </div>
    )
}
