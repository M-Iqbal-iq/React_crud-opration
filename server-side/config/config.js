require('dotenv').config()
const  mongoose  = require("mongoose");


const DbConnect = async () =>{
    try {
        const res = await mongoose.connect(process.env.MONGO_URI,{})
        console.log("Db Connected successfully");
    } catch (error) {
        console.log(error)
    }

}

module.exports = DbConnect;
