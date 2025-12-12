const express = require("express");
const app = express();
//const userRoutes = require("./routes/user.routes");

//Middlewares
app.use(express.json());

//Routes
const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

module.exports = app;
