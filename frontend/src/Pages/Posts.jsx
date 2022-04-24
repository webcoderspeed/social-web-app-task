import React from 'react'
import PostCard from '../components/PostCard'

const Posts = () => {

  const posts = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      visibility: 'public',
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      visibility: 'public',
    }
  ]

  return (
    <div className='mx-auto w-full p-4 md:w-1/2'>
      <h1 className='font-semibold text-2xl'>Posts</h1>
      <PostCard posts={posts} />
    </div>
  )
}

export default Posts