const  mongoose  = require("mongoose");


const DbConnect = async () =>{
    try {
        const res = await mongoose.connect("mongodb://localhost:27017/crude",{})
        console.log("Db Connected successfully");
    } catch (error) {
        console.log(error)
    }

}

module.exports = DbConnect;
