import React, { useEffect } from 'react';
import PostCard from '../components/PostCard';
import { getPosts } from '../store/actions/post.action';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

const Posts = () => {
  const dispatch = useDispatch();

  const postState = useSelector((state) => state.post);
  const userState = useSelector(state => state.user);
  const { myProfile: { user } } = userState;

  const {
    posts: { posts, loading, error },
  } = postState;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      window.location.href = '/login';
    }
  }, [user])


  return (
    <div className='mx-auto w-full p-4 md:w-1/2'>
      {
        posts && posts?.length === 0 ? (
          <div className='flex flex-col gap-4 items-center justify-center'>
            <h1 className='text-4xl font-semibold'>No Posts Yet</h1>
            <span className='text-blue-500 text-2xl'>Create Post</span>
            <Link
              className='bg-black text-white  font-semibold rounded-full h-6 w-6 flex items-center justify-center'
              to='/create-post'
            >
              +
            </Link>
          </div>
        ) : (
          <>
            <div className='flex items-center justify-between gap-5 w-full'>
              <h1 className='font-semibold text-2xl'>Public Posts</h1>
              <Link
                className='bg-black text-white  font-semibold rounded-full h-6 w-6 flex items-center justify-center'
                to='/create-post'
              >
                +
              </Link>
            </div >
            {error && <h1>Error...</h1>}

            <PostCard posts={posts} loading={loading} />
          </>
        )
      }
    </div>
  );
};

export default Posts;
