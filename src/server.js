require("dotenv").config;
const app = require("./app");
const connectDB = require("./config/db");

const startServer = async () => {
  try {
    //Database connection
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();
