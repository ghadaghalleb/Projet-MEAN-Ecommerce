const router = require('express').Router();
const User = require('../models/User');
// register
router.post('/signup', async(req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({ name, email, password });
        res.json(user);
    } catch (e) {
        if (e.code === 11000) return res.status(400).send('Email already exists');
        res.status(400).send(e.message)
    }
})
// login
 router.get('/login', async(req, res) => {
   const { email, password } = req.body;
   try {
        const user = await User.findByCredentials({ email, password });
       res.json(user)

    } catch (e) {
        res.status(400).send(e.message)
     }
 })
module.exports = router;
router.async (req, res, next) => {
    const { username, password } = req.body
    // Check if username and password is provided
    if (!username || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }
  }