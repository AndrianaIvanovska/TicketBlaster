const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const auth = require("./handlers/authHandler");
const events = require("./handlers/eventHandler");

const db = require("./pkg/db/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true}));

db.init();

app.post("/api/v1/auth/create-account", auth.signup);
app.post("/api/v1/auth/login", auth.login);
// app.get("/api/v1/logout", auth.logout);
// app.get("/api/v1/verify/:token", auth.verifyMail);
// app.get("/api/v1/forgotPassword", auth.forgotPassword);
// app.post("/api/v1/forgotPassword", auth.forgotPassword);
// app.patch("api/v1/resetPassword/:token", auth.resetPassword);
// app.post("/api/v1/logout", auth.logout);
// app.get("/api/v1/validate", auth.protectRoute, (req, res) => {
//     res.status(200).json({ status: "success", bool: true })
// });


app.get("/events", events.getAll);
app.get("/events/:id", events.getOne);
app.post("/events", events.create);
app.put("/events/:id", events.replace);
app.patch("/events/:id", events.update);
app.delete("/events/:id", events.delete);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Service started successfully on port 10000");
});