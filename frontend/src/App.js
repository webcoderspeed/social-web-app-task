import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import CreatePost from './Pages/CreatePost';
import Posts from './Pages/Posts';
import Header from './components/Header';
import MyPosts from './Pages/MyPosts';
import Friends from './Pages/Friends';
import Peoples from './Pages/Peoples';
import FriendPost from './Pages/FriendPost';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/my-posts' element={<MyPosts />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/peoples' element={<Peoples />} />
        <Route path='/friend-posts' element={<FriendPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
