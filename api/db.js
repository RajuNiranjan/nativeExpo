import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const db_url = process.env.MONGO_DB;

    const data_base = await mongoose
      .connect(db_url)
      .then(() => console.log("server is connected to database"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
connectDB();
