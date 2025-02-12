// import mongoose
import mongoose from 'mongoose';

async function dbConnect(): Promise<Connection> {
  // get the connection string from the environment
  const mongoURI = process.env.MONGODB_URI;
  await mongoose.connect(mongoURI);

  // return the connection object
  return mongoose.connection;
}

export default dbConnect;
