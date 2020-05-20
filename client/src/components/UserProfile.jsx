import React, { useState, useEffect } from 'react'
import { getUserById } from '../services/APIHelper'

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
        <div>
            User Profile
            <img src={user.avatar}></img>
            <div>{user.presence}</div>
            <div>{user.status_message}</div>
            <div>{user.phone}</div>
            <div>{user.slack}</div>
            <div>{user.email}</div>
        </div>
    )
}
