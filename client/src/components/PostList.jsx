import React from "react"
import Post from "./Post"

export default function PostList(props) {
  const { posts } = props

  return (
    <div>
      <div className="px-6">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}
