import express from "express";
import "./db.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT_NUMBER;
const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`server is running at port number ${PORT}`));

app.use((err, req, res, next) => {
  if (err) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  }
});
