import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../store/actions/user.action';


const Header = () => {

  const dispatch = useDispatch();

  const userState = useSelector(state => state.user);
  const { myProfile: { user } } = userState;



  const handleLogout = () => {
    dispatch(logOut());
  }

  return (
    <header className="flex items-center w-full p-4">
      <div className="flex justify-between items-center w-full">
        {
          user ? (
            <>
              <nav className="flex justify-between items-center gap-4">
                <Link to="/" className='px-4 py-2 font-semibold  bg-blue-400 hover:bg-blue-600 text-white hover:text-white rounded-lg'>
                  All Posts
                </Link>
                <Link to="/my-posts" className='px-4 py-2 font-semibold  bg-blue-400 hover:bg-blue-600 text-white hover:text-white rounded-lg'>
                  My Posts
                </Link>
                <Link to="/friend-posts" className='px-4 py-2 font-semibold  bg-blue-400 hover:bg-blue-600 text-white hover:text-white rounded-lg'>
                  Friend Posts
                </Link>
                <Link to="/friends" className='px-4 py-2 font-semibold  bg-blue-400 hover:bg-blue-600 text-white hover:text-white rounded-lg'>
                  Friends
                </Link>
                <Link to="/peoples" className='px-4 py-2 font-semibold  bg-blue-400 hover:bg-blue-600 text-white hover:text-white rounded-lg'>
                  Peoples
                </Link>
              </nav>
              <div div className="flex items-center">
                <span className="text-sm bg-purple-600 px-4 py-2 text-white rounded-md">{user.name}</span>
                <button onClick={handleLogout} className="ml-4 px-4 py-2 font-semibold  bg-blue-400 hover:bg-blue-600 text-white hover:text-white rounded-lg">Logout</button>
              </div>
            </>
          )
            :
            <Link to="/login" className="ml-4 px-4 py-2 font-semibold  bg-blue-400 hover:bg-blue-600 text-white hover:text-white rounded-lg">
              Login
            </Link>
        }
      </div>
    </header >
  )
}

export default Header