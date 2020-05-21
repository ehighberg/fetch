import React from 'react'

export default function Avatar(props) {
    
    let user = props.user 

    return (
        <div className='mt-16'>
            <div className='text-2xl font-bold text-white m-4'>{user.name}</div>
            <div className='text-white'>{user.title}</div>
            <div className='mx-auto my-10 w-64 h-64'>
                <img className='w-full rounded-full my-box-shadow' src={user.avatar}></img>
            </div>
        </div>
    )
}
