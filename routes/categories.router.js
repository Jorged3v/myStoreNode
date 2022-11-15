const express = require ('express');
const faker = require ('faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      category: faker.commerce.productAdjective(),
    },
    {
      category: faker.commerce.productAdjective(),
    },
  ])
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    category: faker.commerce.productAdjective(),
  })
});

router.get('/:categoryId/products/:productId', (req, res) =>{
  const { categoryId, productId } = req.params;
  res.json({
      categoryId,
      productId,
    });
});

module.exports = router;
