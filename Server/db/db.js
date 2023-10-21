import mongoose from "mongoose";

async function connectToDb(url) {
  await mongoose.connect(url);
}

export default connectToDb;
