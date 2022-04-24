import React, { useEffect } from 'react'
import { getFriendList } from '../store/actions/friend.action';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import FriendCard from '../components/FriendCard';

const Friends = () => {
  const dispatch = useDispatch();

  const friendState = useSelector((state) => state.friend);

  const {
    friendList: { friends, loading, error },
  } = friendState;

  useEffect(() => {
    dispatch(getFriendList());
  }, [dispatch]);

  return (
    <div className='mx-auto w-full p-4 md:w-1/2'>
      {
        friends && friends?.length === 0 ? (
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>You have no friends</h1>
          </div>
        ) :
          (
            <>
              <div className='flex items-center justify-between gap-5 w-full'>
                <h1 className='font-semibold text-2xl'>Friends</h1>
              </div>
              {error && <h1>Error...</h1>}

              <FriendCard friends={friends} loading={loading} />
            </>
          )

      }
    </div>
  );
}

export default Friends