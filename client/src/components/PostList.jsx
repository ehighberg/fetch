import React from 'react'
import Post from './Post'

export default function PostList(props)
{
    const { posts } = props

    return (
        <>
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </>
    )
}
