const { application } = require('express');
const express = require('express');


const app = express();

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'My first thing',
        description: 'All of the info about my first thing',
        imageUrl: '',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'My second thing',
        description: 'All of the info about my second thing',
        imageUrl: '',
        price: 2900,
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