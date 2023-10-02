const User = require("../../../pkg/user/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendEmail } = require("../../../pkg/mailer/nodemailer");
const { mail } = require("../../../pkg/fsmodules/fileReader");
const sendMailGun = require("../../../pkg/mailer/mailgun");
const crypto = require("crypto");
const { promisify } = require("util");

const cryptoToken = () => {
  return crypto.randomBytes(32).toString("hex");
};
const hashToken = (token) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};
const jwtToken = (options) => {
  return jwt.sign(options, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES
  });
};

const cookie = (res, name, token) => {
  res.cookie(name, token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    secure: false,
    httpOnly: true,
  });
}

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

    if (user.deleted === true) {
      return res.status(403).send("Unauthorized Access");
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send("Invalid email or password!");
    }

    const token = jwtToken({ id: user._id, role: user.role });
    cookie(res, "jwt", token);
    res.status(200).json({
      status: "success"
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie("jwt", {
      secure: false,
    });
    res.status(204).json({ status: "signed out" });
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email, site, protocol } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("user not found");
    const resetToken = cryptoToken();
    const hashedToken = hashToken(resetToken);
    user.passwordResetToken = hashedToken;
    user.passwordResetExpire = Date.now() + 30 * 60 * 1000;
    await user.save({ validateBeforeSave: false });
    const resetUrl = '${protocol}//${site}/resetPassword/${resetToken}';
    const html = await mail("verify", message, resetUrl, "Reseet Password");
    await sendEmail({
      email: user.email,
      subject: "Password Reset",
      html: html,
    });
    res.status(200).json({ status: "success" });
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
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