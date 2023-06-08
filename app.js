const express = require("express");
const morgan = require("morgan");

const auth = require("./handlers/authHandler");
const events = require("./handlers/eventHandler");

const db = require("./pkg/db/index");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

db.init();

app.post("/api/v1/auth/create-account", auth.signup);
app.post("/api/v1/auth/login", auth.login);

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