import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'

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

    const handlers = useSwipeable({
      onSwipedLeft: () => <Redirect exact to={`/users/${userId}/page3`} />,
      onSwipedRight: () => <Redirect exact to={`/users/${userId}`} />
    })

    return (
        <div {...handlers} className='text-center w-screen'>
            <div className='text-3xl text-purple-700 p-6'>Profile Details</div>
            <div className='bg-gray-100 py-4'>
                <ProfileNav user={user} />
                <Avatar user={user} />
                <Bio user={user} />

            </div>

            <div>
                <SocialActivity user={user} />
            </div>
        </div>
    )
}
