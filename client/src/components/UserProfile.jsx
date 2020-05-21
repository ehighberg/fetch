import React, { useState, useEffect } from 'react'
import { getUserById } from '../services/APIHelper'
import Avatar from './Avatar'
import Presence from './Presence'

export default function UserProfile(props) {

    const userId = props.match.params.id

    const [user, setUser] = useState([])

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const res = await getUserById(userId)
        setUser(res)
    }

    console.log(user)

    return (
        <div className='text-center w-screen'>
            <div className='bg-gray-200 pt-10 pb-4'>
                Profile Details
                    <Avatar
                        user={user}
                    />
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
            <div>{user.phone}</div>
            <div>{user.slack}</div>
            <div>{user.email}</div>
        </div>
    )
}
