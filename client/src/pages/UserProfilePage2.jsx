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
        <div className='text-center w-screen'>
            <div className='bg-gray-200 pb-4'>
                <div className='text-3xl bg-gray-500 p-6'>Profile Details</div>
                <ProfileNav user={user} />
                <Avatar user={user} />
                UserProfilePage2
            </div>
        </div>
    )
}
