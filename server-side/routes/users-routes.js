const express = require('express');
const Uusers_routes = express.Router()
const userController = require('../controllers/users-controller');




Uusers_routes.post('/add-user', userController.adduser);
Uusers_routes.get('/user-list',userController.usersList);
Uusers_routes.get('/user-edit/:id',userController.getUserById);
Uusers_routes.post('/user-update/:id',userController.updateUser);
Uusers_routes.delete('/user-delete/:id' , userController.deleteUser)
Uusers_routes.post('/login',userController.ToLogin)





module.exports = Uusers_routes;
