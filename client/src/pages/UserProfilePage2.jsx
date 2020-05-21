import React, { useEffect, useState } from 'react'
import ProfileNav from '../components/ProfileNav'
import Avatar from '../components/Avatar'
import { getUserById } from '../services/APIHelper'
import Bio from '../components/Bio'
import SocialActivity from '../components/SocialActivity'

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
            <div className='text-3xl text-purple-700 p-6 font-bold'>PROFILE DETAILS</div>
            <div className='purple-gradient py-4'>
                <ProfileNav user={user} />
                <Avatar user={user} />
            </div>
                <Bio user={user} />

            <div>
                <SocialActivity user={user} />
            </div>
        </div>
    )
}
