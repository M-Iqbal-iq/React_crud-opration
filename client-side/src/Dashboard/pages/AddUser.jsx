import React, { useState } from 'react';

import axios from 'axios'
import { toast } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom';
const Users_form = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('User Created:', formData);
    try {
      const res = await axios.post(`http://localhost:6003/add-user`, formData)
      console.log(res.data.msg)
      toast.success(res.data.msg)
      setFormData({ name: '', email: '', password: '' });  // Reset form  
      navigate('/admin/user-list')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Add User</div>
            <div className="card-body">
              <div className="card-body">
                <form onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="text-end">
                    <Link to='/admin/user-list' className="btn btn-sm btn-outline-danger ">
                      Cancel
                    </Link>
                    <span className='px-2'></span>
                    <button type="submit" className="btn btn-sm btn-outline-success ">
                      Create User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users_form;
