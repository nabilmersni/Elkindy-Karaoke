const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const karaokeRoute = require("./routes/karaokeRoute");

const app = express();

app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use(express.static(`${__dirname}/public`)); //for serving static files

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1/karaoke", karaokeRoute);

module.exports = app;
