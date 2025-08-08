const express = require('express');
const server = express()
const cors = require('cors');
const DbConnect = require('./config/config');
const Uusers_routes = require('./routes/users-routes');




// middleware
server.use(cors())
server.use(express.json())

DbConnect()




// endpoints
server.get('/',(req,res)=>{
    res.send("hello working ")
})

server.use('/',Uusers_routes)


const  Port  = 6003;
server.listen(Port,()=>{
    console.log(`server is listning on http://localhost:${Port}`)
})