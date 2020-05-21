import React, { useState, useEffect } from 'react'
import { getUserById } from '../services/APIHelper'
import Avatar from './Avatar'
import Presence from './Presence'
import Status from './Status'
import Contact from './Contact'

export default function UserProfile(props) {

    const userId = props.match.params.id

    const [user, setUser] = useState([])

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const res = await getUserById(userId)
        setUser(res)
    }

    console.log(user)

    return (
        <div className='text-center w-screen'>
            <div className='bg-gray-200 pb-4'>
                <div className='text-3xl bg-gray-500 p-6'>Profile Details</div>
                    <Avatar user={user} />
                    <Status user={user} />
                </div>
                
            <Contact user={user} />

            {/* <div className='text-xl flex flex-row justify-between p-6 w-11/12 m-auto'>
                <div>Contact</div>
                <div>Prefers {user.preferred_contact_method}</div>
            </div>

            <div className='border-black border-2 rounded-md mx-12 my-3 p-4'>
                <div className='text-left'>
                    <div>Phone: {user.phone}</div>
                    <div>Slack: {user.slack}</div>
                    <div>Email: {user.email}</div>
                </div>
            </div>

            <div>Average response time: {user.average_response_time_minutes} minutes</div>

            <div>Request a meeting</div> */}
                
        </div>
    )
}
