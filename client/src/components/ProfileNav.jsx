import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProfileNav(props) {

    console.log(props.user)

    return (
        <div className='flex flex-row justify-evenly w-1/4 m-auto mt-4'>
            <NavLink activeClassName="bg-purple-700" className='bg-gray-400 rounded-full hover:bg-white w-5 h-5' exact to={`/users/${props.user.id}`}>
            </NavLink>
            <NavLink activeClassName="bg-purple-700" className='bg-gray-400 rounded-full hover:bg-white w-5 h-5 active:bg-gray-600' exact to={`/users/${props.user.id}/page2`}>
            </NavLink>
            <NavLink activeClassName="bg-purple-700" className='bg-gray-400 rounded-full hover:bg-white w-5 h-5 active:bg-gray-600' exact to={`/users/${props.user.id}/page3`}>
            </NavLink>
        </div>
    )
}
