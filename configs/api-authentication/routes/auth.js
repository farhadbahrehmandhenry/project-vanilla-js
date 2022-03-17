const DataValidation = require('../dataValidation');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/Users');

router.post('/register', async(req, res) => {
  // vlidate the body
  const {error} = DataValidation.registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // avoid user duplication
  const emailExists = await User.findOne({email: req.body.email});

  if (emailExists) return res.status(400).send('Email already registered!');

  // encrypt the password
  const encryptedPassword = await bcrypt.hash(req.body.password, 10);

  // continue if body is correct
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: encryptedPassword
  });

  try {
    const savedUser = await user.save();

    res.send(savedUser);
  }
  catch(err) {
    res.status(400).send(err);
  }
});

router.post('/login', async(req, res) => {
  // vlidate the body
  const {error} = DataValidation.loginValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // avoid user duplication
  const user = await User.findOne({email: req.body.email});

  if (!user) return res.status(400).send('Email not registered');

  // encrypt the password
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    return res.status(401).send('invalid password');
  }

  res.status(200).send('logged in');

  const token = jwt.sign({id: user._id}, process.env.token_secret);

  res.header('auth-token', token).status(200).send(token);
});

module.exports = router;
