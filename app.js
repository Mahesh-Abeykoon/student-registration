const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

// routes
const students = require("./routes/api/students");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true, useFindAndModify: false }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!....")); // this is need not to initial



// use Routes
app.use("/api/students", students);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
