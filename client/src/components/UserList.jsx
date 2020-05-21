import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { getAllUsers, getManyUsersById } from '../services/APIHelper'
import { Link } from 'react-router-dom'


export default function UserList(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {
      if (!props.userIds) {
        fetchUsers()
      } else {
        fetchManyUsersById(props.userIds)
      }
    }, [])

    const fetchUsers = async () => {
        const res = await getAllUsers()
        setUsers(res)
    }

    const fetchManyUsersById = async (userIds) => {
      console.log(props)
      console.log(userIds)
      const res = await getManyUsersById(userIds)
      setUsers(res)
    }

    return (
        <div>
            {users && users.map((user, index) => {
                if (Object.keys(users).length === 0) {
                    return (
                        <div className='text-purple-700'>
                            Loading...
                        </div>
                    )
                }
                return (
                    <Link key={index} to={`/users/${user.id}`}>
                        <UserCard
                            user={user}
                        />
                    </Link>
                )
            })}
        </div>
    )
}
