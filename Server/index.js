//packages import

import express from "express";
import dotenv from "dotenv";

// files imports
import todoRoutes from "./routes/todoRoutes.js";
import connectToDb from "./db/db.js";
import notFound from "./middleware/notFound.js";

// env imports

dotenv.config();
const uri = process.env.MONGO_URI;

const PORT = process.env.PORT || 4000;
const app = express();

//middlewares
app.use(express.json());
app.use("/todo", todoRoutes);
app.use(notFound);

async function start() {
  try {
    await connectToDb(uri);
    console.log("Success connection with the databse");
    app.listen(PORT, () => {
      console.log(`Sever started on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
