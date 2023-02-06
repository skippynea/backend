const express = require ('express');
const router = express.Router();

const Thing = require('../models/thing')

router.post('/api/products', (req, res, next) => {
    console.log('post');
    const thing = new Thing({
        "name": req.body.name,
  
        "description": req.body.description,
    
        "price": req.body.price,
    
        "inStock": req.body.inStock
    
    });
    
    thing.save()
    .then((product) => {
        console.log('Thing has been saved !');
        res.status(201).json({
          product
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  
  router.get('/api/products/:id', (req, res, next) => {
    Thing.findOne({
      _id: req.params.id
    }).then(
      (product) => {
        res.status(200).json({product});
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  });
  
  
  router.put('/api/products/:id', (req, res, next)=>{
    const thing=new Thing({
      _id: req.params.id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      inStock: req.body.inStock
    });
    Thing.updateOne({_id: req.params.id}, thing).then(
      () => {
        res.status(201).json({
          message: 'Modified!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  
  
  router.delete('/api/products/:id', (req, res, next) => {
    Thing.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  
  
  router.get('/api/products', (req, res, next) => {
    Thing.find().then(
      (products) => {
        console.log(products)
        res.status(200).json({products});
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

module.exports= router;
