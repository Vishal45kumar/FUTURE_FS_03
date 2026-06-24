import mongoose from 'mongoose'
export const connectDB = async () => {
  try {
    const connectioninstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `\n MongoDb connected ! DB host:${connectioninstance.connection.host}`,
    );
  } catch (error) {
    console.log("MongoDb connection error", error);
    process.exit(1);
  }
};
