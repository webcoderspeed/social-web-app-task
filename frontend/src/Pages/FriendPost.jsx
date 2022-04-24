import React, { useEffect } from 'react';
import PostCard from '../components/PostCard';
import { getFriendsPosts } from '../store/actions/post.action';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

const FriendPost = () => {
  const dispatch = useDispatch();

  const postState = useSelector((state) => state.post);

  const {
    friendPosts: { posts, loading, error },
  } = postState;

  useEffect(() => {
    dispatch(getFriendsPosts());
  }, [dispatch]);

  return (
    <div className='mx-auto w-full p-4 md:w-1/2'>
      {
        posts && posts.length === 0 ? (
          <div className='text-center'>
            <h1 className='text-2xl font-light'>
              Your friend may have the set the post visibility to private you are only allowed to see your friends posts whose visibility is set to
              <span className='font-bold'> Friends</span>
            </h1>
          </div>
        ) : (
          <>
            <div className='flex items-center justify-between gap-5 w-full'>
              <h1 className='font-semibold text-2xl'>Friend Posts - VISIBILITY [FRIENDS]</h1>
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
    </div >
  );
};

export default FriendPost;
