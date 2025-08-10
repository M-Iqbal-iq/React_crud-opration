import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes
import Home from './pages/Home';
import Users_form from './Dashboard/pages/AddUser';
import UserEdit from './Dashboard/pages/EditUser';
import { ToastContainer, toast } from 'react-toastify';  // Import toast for notifications
import LoginForm from './pages/LoginForm';

import Dashbaord from './Dashboard/Dashbaord';
import UsersList from './Dashboard/pages/UsersList';
import DashbordCard from './Dashboard/pages/DashbordCard';
import AddProducts from './Dashboard/pages/AddProducts';
import ProductsList from './Dashboard/pages/Products-list';
import EditProducts from './Dashboard/pages/EditProducts';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>  {/* Wrap Route inside Routes */}
          
          <Route path='/' element={<Home />} />  {/* Use element prop instead of component */}
          <Route path='/login' element={< LoginForm />} />
          <Route path='/admin' element={<Dashbaord />}>
           <Route index element={<DashbordCard />} />
            <Route path='user-form'  element={<Users_form />} />
            <Route path='user-list' element={<UsersList />} />
            <Route path='user-list/user-edit/:id' element={<UserEdit />} />
            <Route path='products'  element={<ProductsList />} />
            <Route path='add-products'  element={<AddProducts />} />
            <Route path='edit-product/:id'  element={<EditProducts />} />
          </Route>

        </Routes>
      </Router>
      <ToastContainer />  {/* Add ToastContainer for notifications */}
    </div>
  );
}

export default App;
