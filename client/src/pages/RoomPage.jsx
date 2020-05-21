import React, { useState, useEffect } from 'react'
import { getRoomWithDetail } from '../services/APIHelper'
import Room from '../components/Room'

let sub

export default function RoomPage(props)
{
    let { cable } = props
    let { id } = props.match.params

    const [roomDetail, setRoomDetail] = useState([])

    useEffect(() =>
    {
        getInitialRoomPosts()
    }, [])



    const handleRecievePost = async () =>
    {
        let singleRoomWithDetailsResponse = await getRoomWithDetail(id)
        setRoomDetail(singleRoomWithDetailsResponse)
    }

    const getInitialRoomPosts = async () =>
    {
        sub = cable.subscriptions.create({ channel: 'RoomChannel', room: id },
            { received: handleRecievePost })

        let singleRoomWithDetailsResponse = await getRoomWithDetail(id)
        setRoomDetail(singleRoomWithDetailsResponse)
    }

    return (
        <>
            <div>
                <Room roomDetails={roomDetail} />
            </div>

        </>
    )
}
