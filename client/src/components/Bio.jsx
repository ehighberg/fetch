import React from 'react'

export default function Bio(props) {

    let user = props.user

    return (
        <div>
            <div className='text-purple-700 text-2xl'>Bio</div>
            <div className='border-black border-2 rounded-md mx-12 my-3 p-4'>
                {user.bio}
            </div>
        </div>
    )
}
