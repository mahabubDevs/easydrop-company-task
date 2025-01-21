const express = require('express');
const db = require('../db/knex');
const router = express.Router();

router.get('/', async (req, res) => {
  const { search } = req.query;
  try {
    const products = await db('products')
      .where('name', 'like', `%${search || ''}%`);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
