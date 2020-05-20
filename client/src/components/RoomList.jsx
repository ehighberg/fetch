import React from 'react'
import RoomCard from './RoomCard'

export default function RoomList(props)
{
    const { rooms } = props

    console.log(rooms)

    return (
        <>
            {rooms.map((room, index) => (
                <RoomCard key={index} roomName={room.name} roomId={room.id} />
            ))}
        </>
    )
}
