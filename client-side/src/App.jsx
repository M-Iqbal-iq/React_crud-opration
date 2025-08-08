import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes
import Home from './pages/Home';
import Users_form from './pages/Users_form';
import User_list from './pages/User_list';
import UserEdit from './pages/UserEdit';
import {ToastContainer, toast } from 'react-toastify';  // Import toast for notifications
import LoginForm from './pages/LoginForm';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>  {/* Wrap Route inside Routes */}
          <Route path='/' element={<Home />} />  {/* Use element prop instead of component */}
          <Route path='/user-form' element={<Users_form />} />
          <Route path='/user-list' element={<User_list/>} />
          <Route path='/user-list/user-edit/:id' element={<UserEdit />} />
          <Route path='/login' element={< LoginForm />} />
        </Routes>
      </Router>
      <ToastContainer />  {/* Add ToastContainer for notifications */}
    </div>
  );
}

export default App;
