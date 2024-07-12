const mongoose = require('mongoose');
const db_url = process.env.DATABASE_STRING;
console.log("this is the url",db_url);
module.exports = mongoose.connect(process.env.DATABASE_STRING, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("The database is successfully connected")
}).catch((error)=>{
    console.log("Some error occured" ,error);
})