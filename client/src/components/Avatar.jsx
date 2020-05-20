import React from 'react'

export default function Avatar(props) {
    
    let user = props.user 

    return (
        <div>
            <div>{user.name}</div>
            <div>{user.title}</div>
            <div className='m-auto w-64 h-64'>
                <img className='w-full rounded-full' src={user.avatar}></img>
            </div>
        </div>
    )
}
