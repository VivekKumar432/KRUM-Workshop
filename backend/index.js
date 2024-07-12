const express = require('express');
const dotenv = require('dotenv').config();
const mongodb = require('./config/database');
const cors = require('cors');
const app = express();
app.use(express.json());
const userRoutes = require('./routes/userRoute')

app.use(cors());
app.use('/user', userRoutes);
// app.get('/', (req,res)=>{
//     res.send('Hello this is the Homepage');
// });

// //the name of the route is '/NDTV'
// app.get('/NDTV', (req,res)=>{
//     res.send('Hello this is the Official NDTV YouTube Channel');
// });

// app.get('/about', (req,res)=>{
//     res.send('Hello this is the About page');
// });


// app.get('*', (req,res)=>{
//     res.send('404');
// });



const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Serer is running on PORT no ${PORT}`)
});