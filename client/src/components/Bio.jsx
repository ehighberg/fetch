import React from 'react'

export default function Bio(props) {

    let user = props.user

    return (
        <div>

            <div className='font-bold text-purple-700 text-lg mt-10'>Bio</div>
            <div className='border-b-2 mx-12 p-4'>
                {user.bio}
            </div>
            
        </div>
    )
}
