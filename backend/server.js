const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

// connect database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);

// port (important change)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});