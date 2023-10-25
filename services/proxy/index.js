const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");
const app = express();

app.use(cors());


const authProxy = proxy("http://127.0.0.1:10001", {
    proxyReqPathResolver: (req) => {
        return `http://127.0.0.1:10001/api/v1/auth${req.url}`;
    },
});


const eventProxy = proxy("http://127.0.0.1:10002", {
    proxyReqPathResolver: (req) => {
        return `http://127.0.0.1:10002/events${req.url}`;
    },
});


app.use("/api/v1/auth", authProxy);
app.use("/events", eventProxy);

app.listen(process.env.PORTEVENT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("proxy service started on port " + process.env.PORTEVENT);
});