import React from 'react'
import Presence from './Presence'

export default function AvatarSmall(props)
{
    let user = props.user
    let manager = props.manager

    return (
        <>
            <div className='mx-auto'>
                <div className='w-2 h-2'>
                    <Presence presence={user.presence} />
                </div>
                <div className={`p-1 rounded-full ${manager ? 'bg-purple-700' : 'bg-yellow-400'}`}>
                    <img className='w-20 h-20 object-cover object-top rounded-full'
                        src={user.avatar} alt='avatar'></img>
                </div>
            </div>
        </>
    )
}
