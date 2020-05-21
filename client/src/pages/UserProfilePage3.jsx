import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'

import ProfileNav from '../components/ProfileNav'
import { getUserById } from '../services/APIHelper'
import Avatar from '../components/Avatar'
import Pics from '../components/Pics'

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

    const handlers = useSwipeable({
      onSwipedRight: () => <Redirect exact to={`/users/${userId}/page2`} />
    })

    return (
        <div {...handlers} className='text-center w-screen'>
            <div className='text-3xl text-purple-700 p-6'>Profile Details</div>
            <div className='bg-gray-100 py-4'>
                <ProfileNav user={user} />
                <Avatar user={user} />
            </div>
            <div>
                <Pics user={user} />
            </div>
        </div>
    )
}
