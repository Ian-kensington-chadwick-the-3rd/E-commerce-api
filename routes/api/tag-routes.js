const router = require('express').Router();
const { where } = require('sequelize');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const categoryData = await Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const libraryCardData = await Tag.findByPk(req.params.id, {
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

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(tag);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const userData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No Tag with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const userData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No Tag with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
