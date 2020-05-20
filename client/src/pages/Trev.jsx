import React, { useEffect, useState } from 'react'
import { getAllRooms } from '../services/APIHelper'
import RoomList from '../components/RoomList'

export default function Trev()
{
    const [rooms, setRooms] = useState([])

    useEffect(() =>
    {
        getInitialData()
    }, [])

    const getInitialData = async () =>
    {
        let response = await getAllRooms()
        setRooms(response.data)
        console.log(response)
    }


    return (
        <div>
            <RoomList rooms={rooms} />
        </div>
    )
}
