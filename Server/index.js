//packages export

import express from "express";
import dotenv from "dotenv";

// files exports

// env exports
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.listen(PORT, () => {
  console.log(`Sever started on port ${PORT}`);
});
