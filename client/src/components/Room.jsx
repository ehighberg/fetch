import React, { Profiler } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'

export default function Room(props)
{
    const { name, posts } = props.roomDetails

    console.log(name)

    return (
        <div className="border-gray-500 rounded border">
            <div className="text-center text-xl">{name ? name : "Room"}</div>
            <div className="text-xs">
                {posts ? <PostList posts={posts} /> : "Loading..."}
            </div>
            <div>
                <PostForm />
            </div>
        </div>
    )
}
