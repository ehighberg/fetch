import React from 'react'

export default function UserProfile(props) {

    console.log(props.user)
    let user = props.user

    // add function to convert lat/long to location/timezone

    return (
        <div>
            User Profile
            <img src={user.avatar}></img>
            <div>{user.presence}</div>
            <div>{user.status_message}</div>
            <div>{user.phone}</div>
            <div>{user.email}</div>
            <div>{user.slack}</div>
            <div>{user.last_location}</div>
            <div>{user.email}</div>
            <div>{user.email}</div>
        </div>
    )
}
