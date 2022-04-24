import React, { useEffect } from 'react'
import PostCard from '../components/PostCard'
import { getMyPosts, getPosts } from '../store/actions/post.action'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'

const MyPosts = () => {

  const dispatch = useDispatch();

  const postState = useSelector(state => state.post);

  const {
    myPosts: {
      posts,
      loading,
      error
    }
  } = postState;


  useEffect(() => {
    dispatch(getMyPosts())
  }, [dispatch])

  return (
    <div className='mx-auto w-full p-4 md:w-1/2'>
      <div className='flex items-center justify-between gap-5 w-full'>
        <h1 className='font-semibold text-2xl'>My Posts</h1>
        <Link className='bg-black text-white  font-semibold rounded-full h-6 w-6 flex items-center justify-center' to='/create-post'>
          +
        </Link>
      </div>
      {
        error && <h1>Error...</h1>
      }

      <PostCard posts={posts} loading={loading} />

    </div>
  )
}

export default MyPosts