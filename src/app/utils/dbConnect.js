import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
  } catch (error) {
    console.log(error);
  }
}
