// const express = require("express");
// const auth = require("./handlers/authHandler");
// const cors = require("cors");

// const db = require("../../pkg/db/index");

// const app = express();

// db.init();
// app.use(express.json());
// app.use(cors());

// // ruti
// app.post("/api/v1/auth/login", auth.login);
// app.post("/api/v1/auth/create-account", auth.signup);

// app.listen(process.env.PORTAUTH, (err) => {
//     if (err) {
//         return console.log("Could not start service");
//     }
//     console.log(`Service started succesfully on port ${process.env.PORTAUTH}`);
// });