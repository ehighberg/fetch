import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'

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

    const handlers = useSwipeable({
      onSwipedLeft: () => <Redirect exact to={`/users/${userId}/page2`} />
    })

    return (
        <div {...handlers} className='text-center w-screen'>
            <div className='text-3xl text-purple-700 p-6'>Profile Details</div>
            <div className='bg-gray-100 py-4'>
                <ProfileNav user={user} />
                <Avatar user={user} />
                <Status user={user} />
            </div>

            <Contact user={user} />

        </div>
    )
}
