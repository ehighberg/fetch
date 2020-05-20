import React from 'react'
import UserCard from './UserCard'
import { getAllUsers } from '../services/APIHelper'
import { useState } from 'react'


export default function UserList(props) {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const res = await getAllUsers()
        setUsers(res.data)
    }

    return (
        <div>
            User List
            <UserCard />
        </div>
    )
}
