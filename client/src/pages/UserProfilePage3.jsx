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
        <div className='text-center w-screen'>
            <div className='bg-gray-100 pb-4'>
                <div className='text-3xl text-purple-700 p-6'>Profile Details</div>
                <ProfileNav user={user} />
                <Avatar user={user} />
                UserProfilePage3
            </div>
        </div>
    )
}
