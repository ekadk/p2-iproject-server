if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");
const app = express();
// const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);
app.use(errorHandler);

module.exports = app
