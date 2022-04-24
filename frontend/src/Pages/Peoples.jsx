import React, { useEffect } from 'react'
import { getUsers } from '../store/actions/user.action';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import PeopleCard from '../components/PeopleCard';

const Peoples = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const { allUsers: { users, loading, error }, } = user;


  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch,]);

  return (
    <div className='mx-auto w-full p-4 md:w-1/2'>
      {
        users && users?.length === 0 ? (
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>No users to follow</h1>
          </div>
        ) :
          (
            <>
              <div className='flex items-center justify-between gap-5 w-full'>
                <h1 className='font-semibold text-2xl'>Peoples</h1>
              </div>
              {error && <h1>Error...</h1>}
              {
                <PeopleCard peoples={users} loading={loading} />
              }
            </>
          )
      }
    </div>
  );
}

export default Peoples