import React from 'react'
import { getAllUsers } from '../services/APIHelper'
import UserList from '../components/UserList'



export default function Tara()
{
    return (
        <div>
            Hi Tara
            <UserList />
        </div>
    )
}
