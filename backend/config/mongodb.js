import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log("DB Connected");
    });

    // Ensure the URI is correct
    const dbURI = `${process.env.MONGODB_URI}/e-commerce`;
    console.log(`Connecting to MongoDB at ${dbURI}`);  // Debug log

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
}

export default connectDB;
