const User = require("../pkg/user/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {promisify} = require("util");

exports.signup = async (req, res) => {
    try {
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
  
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
      });
  
      res.cookie("jwt", token, {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        secure: false,
        httpOnly: true,
      });
  
      res.status(201).json({
        status: "success",
        token,
        data: {
          user: newUser,
        },
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  };

  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
    
      if (!email || !password) {
        return res.status(400).send("Please provide email and password!");
      }
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).send("Invalid email or password!");
      }
     
      const isPasswordValid = bcrypt.compareSync(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(400).send("Invalid email or password!");
      }
    
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
      });
      res.status(201).json({
        status: "success",
        token,
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  };
  
  exports.protect = async (req, res, next) => {

    let token;

    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    };

    if (!token) {
      return res.status(500).send("You are not logged in!");
    };
  
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    
    const userTrue = await User.findById(decoded.id);
    if (!userTrue) {
      return res.status(401).send("Used doenst longer exist!");
    };
  
    next();
  };