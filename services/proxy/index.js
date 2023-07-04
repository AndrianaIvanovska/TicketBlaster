const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");
const app = express();

app.use(cors());


const authProxy = proxy("http://localhost:10001", {
    proxyReqPathResolver: (req) => {
        return `/api/v1/auth${req.url}`;
    },
});


const eventProxy = proxy("http://localhost:10002", {
    proxyReqPathResolver: (req) => {
        return `/api/v1/events${req.url}`;
    },
});


app.use("/api/v1/auth", authProxy);
app.use("/api/v1/events", eventProxy);

app.listen(10000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("proxy service started on port 10000");
});