const { application } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message:'Thing saved sucessfully !'
  });
});

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'My first thing',
        description: 'All of the info about my first thing',
        imageUrl: 'https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_960_720.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'My second thing',
        description: 'All of the info about my second thing',
        imageUrl: 'https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_960_720.jpg',
        price: 3999,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
});

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

module.exports = app;