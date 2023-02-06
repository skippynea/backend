// user : SkippyTheBoss
// MongoDB PW : 23eQ01SE1ft5zwQM
// MongoDB Connection : mongodb+srv://SkippyTheBoss:23eQ01SE1ft5zwQM@cluster0.os2cpuz.mongodb.net/?retryWrites=true&w=majority

// user : SecondUser
// Psw : gP29WTK2qq0pryAD

// image url : https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_960_720.jpg


const express = require('express');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');

const app = express();
app.use(express.json());

// mongodb+srv://<username>:<password>@cluster0.os2cpuz.mongodb.net/?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://SkippyTheBoss:23eQ01SE1ft5zwQM@cluster0.os2cpuz.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });




module.exports = app;

/* app.use((req, res, next)=>{
    console.log('Request received !');
    next();
})

app.use((req, res, next)=>{
    res.status(201);
    next();
})

app.use((req, res, next)=>{
    res.json({message:'your request was successful !' })
    next();
})

app.use((req, res, next)=>{
    console.log('Response sent successfully !');
}) */

