import React, { useState, useEffect } from 'react'
import ProfileNav from '../components/ProfileNav'
import { getUserById } from '../services/APIHelper'
import Avatar from '../components/Avatar'

export default function UserProfilePage3(props) {

    const userId = props.match.params.id

    const [user, setUser] = useState([])

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const res = await getUserById(userId)
        setUser(res)
    }

    return (
        <div>
            <ProfileNav />
            <Avatar user={user} />
            UserProfilePage3
        </div>
    )
}
