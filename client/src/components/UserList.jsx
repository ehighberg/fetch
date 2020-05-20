import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { getAllUsers } from '../services/APIHelper'


export default function UserList(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const res = await getAllUsers()
        setUsers(res)
    }

    return (
        <div>
            <h1 className='text-xl text-purple-700'>User List</h1>
            <div className='flex flex-row flex-wrap justify-around content-between'>
                {users && users.map((user, index) => {
                    if (Object.keys(users).length === 0) {
                        return (
                            <div>
                                Loading...
                            </div>
                        )
                    }
                    return (
                        <UserCard
                            key={index}
                            user={user}
                        />
                    )
                })}
            </div>
        </div>
    )
}
