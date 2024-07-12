const mongoose = require('mongoose');

module.exports = mongoose.connect("mongodb+srv://piebytwo014:piebytwo014@weekend.lqt4yco.mongodb.net/?retryWrites=true&w=majority&appName=weekend", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("The database is successfully connected")
}).catch((error)=>{
    console.log("Some error occured" ,error);
})