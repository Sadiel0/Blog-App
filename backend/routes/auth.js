const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const newUSer = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUSer.save();
    res.status(200).json(user);
  } catch (err) {
    res.send(500).json(err);
  }
});

module.exports = router;
