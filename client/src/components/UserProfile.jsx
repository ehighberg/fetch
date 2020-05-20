import React, { useState, useEffect } from 'react'
import { getUserById } from '../services/APIHelper'
import Avatar from './Avatar'

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
            <div>{user.presence}</div>
            <div>{user.status_message}</div>
            <div>{user.phone}</div>
            <div>{user.slack}</div>
            <div>{user.email}</div>
        </div>
    )
}
