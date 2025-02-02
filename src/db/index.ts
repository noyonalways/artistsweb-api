import mongoose from "mongoose";
import config from "../config";
import seedAdmin from "./seed";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.DATABASE_URL as string, {
      serverSelectionTimeoutMS: 5000,
    });
    // eslint-disable-next-line no-console
    console.log("Connected to database".cyan);

    await seedAdmin();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Failed to connect to the database", err);
    process.exit(1);
  }
};

export default connectToDatabase;
