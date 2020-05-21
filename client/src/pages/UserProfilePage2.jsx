import React, { useEffect, useState } from 'react'
import ProfileNav from '../components/ProfileNav'
import Avatar from '../components/Avatar'
import { getUserById } from '../services/APIHelper'

export default function UserProfilePage2(props) {

    console.log(props)

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
            <ProfileNav user={user} />
            <Avatar user={user} />
            UserProfilePage2
        </div>
    )
}
