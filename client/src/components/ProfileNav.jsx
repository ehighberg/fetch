import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileNav(props) {

    console.log(props.user)

    return (
        <div className='flex flex-row justify-evenly w-1/4 m-auto mt-4'>
            <Link className='bg-gray-400 rounded-full hover:bg-white w-5 h-5' to={`/users/${props.user.id}`}>
            </Link>
            <Link className='bg-gray-400 rounded-full hover:bg-white w-5 h-5' to={`/users/${props.user.id}/page2`}>
            </Link>
            <Link className='bg-gray-400 rounded-full hover:bg-white w-5 h-5' to={`/users/${props.user.id}/page3`}>
            </Link>
        </div>
    )
}
