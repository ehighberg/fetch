import React, { useEffect, useState } from 'react'
import { getAllRooms, getRoomWithDetail } from '../services/APIHelper'
import RoomList from '../components/RoomList'
import Room from '../components/Room'

export default function Trev()
{
    const [rooms, setRooms] = useState([])
    const [roomDetail, setRoomDetail] = useState([])

    useEffect(() =>
    {
        getInitialData()
    }, [])

    const getInitialData = async () =>
    {
        let allRoomsResponse = await getAllRooms()
        setRooms(allRoomsResponse)

        let singleRoomWithDetailsResponse = await getRoomWithDetail(1)
        setRoomDetail(singleRoomWithDetailsResponse)
    }


    return (
        <>
            <div className="text-red-600">Below is the RoomList component</div>
            <div className="">
                <RoomList rooms={rooms} />
            </div>
            <div className="text-red-600">Below is the Room component</div>
            <div>
                <Room roomDetails={roomDetail} />
            </div>
        </>
    )
}
