import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [cridencial , setCridencial ] = useState({
    email:"",
    password:""
  });
  
  const handleChange = (e) =>{
    const {name,value}  = e.target;
    setCridencial({...cridencial,[name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    try {
        const res = await  axios.post(`http://localhost:6003/login`, cridencial) 
        toast.success(res.data.msg)
        
    } catch (error) {
        // toast.error(error.response?.data?.msg || "Login failed")
        console.log(error.response.data.msg);
        toast.error(error.response.data.msg)
    }

  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit} className='shadow-lg rounded p-5'>
        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={cridencial.email}
            onChange={handleChange}
            name='email'
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={cridencial.password}
            onChange={handleChange}
            name='password'
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
