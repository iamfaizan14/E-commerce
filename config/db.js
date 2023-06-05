import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to db successfully ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error in connection ${error}`);
  }
};
export default connectDB;
