const express = require("express");
const event = require("./handlers/eventHandler");
const db = require("../../pkg/db/index");
const jwt = require("express-jwt");
const cors = require("cors");

db.init();

const app = express();
app.use(cors());
app.use(express.json());


app.use(
    jwt.expressjwt({
        algorithms: ["HS256"],
        secret: process.env.JWT_SECRET,
    }).unless({
        path: [
            '/api/v1/events',
        ]
    })
);

//app.get("/api/v1/events/me", event.getByUser);
//app.post("/api/v1/events/createuser", event.createByUser);

app.get("/api/v1/events", event.getAll);
app.get("/api/v1/events/:id", event.getOne);
app.post("/api/v1/events", event.create);
app.patch("/api/v1/events/:id", event.update);
app.delete("/api/v1/events/:id", event.delete);
app.put("/events/:id", event.replace);

app.listen(process.env.PORTEVENT, (err) => {
    if (err) {
        return console.log("Could not start a service");
    }
    console.log(" service started successfully on port " + process.env.PORTEVENT);
});