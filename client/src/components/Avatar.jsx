import React from 'react'

export default function Avatar(props) {
    
    let user = props.user 

    return (
        <div>
            <div className='text-2xl m-4'>{user.name}</div>
            <div className='text-xl'>{user.title}</div>
            <div className='mx-auto my-10 w-64 h-64'>
                <img className='w-full rounded-full' src={user.avatar}></img>
            </div>
        </div>
    )
}
