const express = require('express');
const db = require('../db/knex');
const router = express.Router();

router.get('/', async (req, res) => {
  const { userId } = req.query;
  try {
    const cart = await db('cart')
      .join('products', 'cart.product_id', 'products.id')
      .select('cart.id', 'products.name as product_name', 'cart.quantity', 'products.price')
      .where('cart.user_id', userId);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/add', async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const existingItem = await db('cart')
      .where({ user_id: userId, product_id: productId })
      .first();

    if (existingItem) {
      await db('cart')
        .where({ user_id: userId, product_id: productId })
        .update({ quantity: existingItem.quantity + quantity });
    } else {
      await db('cart').insert({ user_id: userId, product_id: productId, quantity });
    }
    res.json({ message: 'Product added to cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/remove', async (req, res) => {
  const { userId, productId } = req.body;
  try {
    await db('cart')
      .where({ user_id: userId, product_id: productId })
      .del();
    res.json({ message: 'Product removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/checkout', async (req, res) => {
  const { userId } = req.body;
  try {
    await db('cart').where({ user_id: userId }).del();
    res.json({ message: 'Congratulations! Your order has been placed.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
