import React from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
import AvatarSmall from '../components/AvatarSmall'

export default function Room(props)
{

    const { name, posts, id } = props.roomDetails
    const { user } = props

    return (
        <div className="">
            <div className="flex items-center justify-center h-24">
                <div>{user ? <AvatarSmall user={user} /> : ""}</div>
                <div className="font-poppins pl-4 text-2xl text-center text-purple-700 uppercase">{name ? name : "Room"}</div>
            </div>
            <div className="text-xs">
                {posts ? <PostList posts={posts} /> : "Loading..."}
            </div>
            <div>
                <PostForm roomId={id} />
            </div>
        </div>
    )
}
