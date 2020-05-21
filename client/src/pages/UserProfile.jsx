import React, { useState, useEffect } from 'react'
import { getUserById } from '../services/APIHelper'
import Avatar from '../components/Avatar'
import Status from '../components/Status'
import Contact from '../components/Contact'
import ProfileNav from '../components/ProfileNav'

export default function UserProfile(props) {

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
                    <ProfileNav />
                    <Avatar user={user} />
                    <Status user={user} />
                </div>
                
            <Contact user={user} />
                
        </div>
    )
}
