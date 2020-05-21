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
            Profile Details
            <Avatar
                user={user}
            />
            <div className='w-5 h-5 ml-24 mr-0'>
                <Presence
                    presence={user.presence}
                />
            </div>
            <div className='m-0 inline'>{user.presence}</div>
            <div>{user.status_message}</div>
            <div>{user.phone}</div>
            <div>{user.slack}</div>
            <div>{user.email}</div>
        </div>
    )
}
