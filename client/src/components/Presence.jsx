import React from 'react'

export default function Presence(props) {

    console.log(props)

    let presence = props.presence
    let color

    if (presence == 'online') {
        color = 'bg-green-400'
    } else if (presence == 'offline') {
        color = 'bg-red-600'
    } else {
        color = 'bg-yellow-500'
    }

    return (
        <div className={`rounded-full ${color} w-5 h-3 m-2`}></div>
    )
}
