const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // find all from the categorys model
  // send it back to the user
  // 
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // specify a category by its id
  // some req.params.nonsense
  // send it back to the user
});

router.post('/', (req, res) => {
  // create a new category
  // get the body and get the contens and insert into sequelize
  // category.create
  // what ever we created we can return it back off the res.json
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // taking an id as a parameter and also recieving a req.boydy
  // sequalize update 
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // destroy
  // destroying based off the req.params.id
  // res.json to let the server know its gone
  
});

module.exports = router;
