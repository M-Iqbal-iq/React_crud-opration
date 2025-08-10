import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
const navigate = useNavigate()

const UserChek = () =>{
          // Check if user is logged in   
             const user  = localStorage.getItem("user");
             console.log(user);
             if(!user){
                // redirect to login page 
                navigate('/login')
             }
}
    useEffect(() => {
       UserChek()
})
 const handleLogout = () =>{
    localStorage.removeItem('user')
    UserChek()
 }

  return (
    <div>
      <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        <button className='btn btn-sm btn-dagner' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
