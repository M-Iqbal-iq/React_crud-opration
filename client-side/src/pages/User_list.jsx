import axios from 'axios';

import { toast } from 'react-toastify';  // Import toast for notifications
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const User_list = () => {
  // Example static user data
  const [usersList , setUserList] = useState([]);
  const fetchUsers = async ()=>{
    try {
        const lists = await axios.get('http://localhost:6003/user-list')
        console.log(lists.data)
        setUserList(lists.data)
    } catch (error) {
        console.log(error)
    }
    }
useEffect(()=>{
    fetchUsers()

},[])
const handleDelete = async (id) =>{

  if(window.confirm('Are You Sur to Delete This User ?')){
    const del = await axios.delete(`http://localhost:6003/user-delete/${id}`)
    // console.log(del.data.msg);
    toast.success(del.data.msg)
    fetchUsers()
  }
  // console.log(id)
}
  return (
    <div>
      <Link to="/user-form" className="btn btn-info">Add New User</Link>
      <h2>User List</h2>
      <table border="1" cellPadding="10" cellSpacing="0" className='table table sm bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <a href={`user-list/user-edit/${user._id}`} className='btn btn-sm btn-warning'>Edit</a>
                <button className='btn btn-sm btn-danger' style={{ marginLeft: '10px' }} onClick={()=>{handleDelete(user._id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User_list;
