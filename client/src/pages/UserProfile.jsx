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
            <div className='text-3xl text-purple-700 p-6'>Profile Details</div>
            <div className='purple-gradient py-4'>
                <ProfileNav user={user} />
                <Avatar user={user} />
            </div>
                <Status user={user} />
            
                
            <Contact user={user} />
                
        </div>
    )
}
