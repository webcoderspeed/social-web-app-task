import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import CreatePost from './Pages/CreatePost';
import Posts from './Pages/Posts';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createpost' element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
