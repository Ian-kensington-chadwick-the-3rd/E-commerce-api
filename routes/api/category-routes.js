const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // find all from the categorys model
  // send it back to the user
  // 
  try {
    const categoryData = await Category.findAll({
      include: [{model:  Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find one category by its `id` value
  // be sure to include its associated Products
  // specify a category by its id
  // some req.params.nonsense
  // send it back to the user
router.get('/:id', async (req, res) => {
  
  try {
    const libraryCardData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!libraryCardData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {
  // create a new category
  // get the body and get the contens and insert into sequelize
  // category.create
  // what ever we created we can return it back off the res.json
  try {
    const locationData = await Category.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  // taking an id as a parameter and also recieving a req.boydy
  // sequalize update 
  try {
    const userData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
    
  try {
      const userData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
 // delete a category by its `id` value
  // destroy
  // destroying based off the req.params.id
  // res.json to let the server know its gone