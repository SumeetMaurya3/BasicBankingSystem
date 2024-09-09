const mongoose = require('mongoose');

const conn = ()=>{
    mongoose.connect(process.env.mongo_url).then(()=> {
        console.log("DATABASE CONNECTED");
    }).catch((err) =>{
        console.log(err)
    })
}

module.exports =conn;
