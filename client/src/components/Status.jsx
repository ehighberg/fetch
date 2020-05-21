import React from 'react'
import Presence from './Presence'

export default function Status(props) {

    let user = props.user
    
    return (
        <div>
            <div className='flex flex-row justify-evenly my-6 mx-auto w-1/4'>
                <div className='w-5 h-5'>
                    <Presence
                        presence={user.presence}
                    />
                </div>
                <div className=''>{user.presence}</div>

            </div>
            <div className='border-black border-2 rounded-md mx-12 my-3 p-4'>
                {user.status_message}
            </div>
        </div>
    )
}
