const express = require('express');
const db = require('../db/knex');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { users, password } = req.body;
  try {
    const user = await db('users').where({ users, password }).first();
    if (user) {
      res.json({ success: true, userId: user.id });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
