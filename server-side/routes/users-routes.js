const express = require('express');
const Users_routes = express.Router()
const userController = require('../controllers/users-controller');




Users_routes.post('/add-user', userController.adduser);
Users_routes.get('/user-list',userController.usersList);
Users_routes.get('/user-edit/:id',userController.getUserById);
Users_routes.post('/user-update/:id',userController.updateUser);
Users_routes.delete('/user-delete/:id' , userController.deleteUser)
Users_routes.post('/login',userController.ToLogin)





module.exports = Users_routes;
