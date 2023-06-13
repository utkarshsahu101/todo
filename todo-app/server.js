require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

// connect database
connectDB();

// routes
const todo = require("./routers/todo");

// cors
// app.use(cors({ origin: true, credentials: true }));
app.use(
  cors({ origin: "https://todo-frontend-x152.onrender.com", credentials: true })
);

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/todo", todo);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`sever is running on http://localhost:${PORT}`);
});
