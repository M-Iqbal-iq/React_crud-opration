require('dotenv').config()

const express = require('express');
const server = express()
const cors = require('cors');
const DbConnect = require('./config/config');
const Users_routes = require('./routes/users-routes');
const Products_routes = require('./routes/products-routes');



// middleware
server.use(cors())
server.use(express.json())

// db
DbConnect()




// endpoints
server.get('/',(req,res)=>{
    res.send("hello working ")
});


server.use('/',Users_routes)
server.use('/',Products_routes)




// const PORT  = process.env.PORT || 6001;
const PORT = process.env.PORT || 6001
// const PORT = 6003
server.listen(PORT,()=>{
    console.log(`server is listning on http://localhost:${PORT}`)
})