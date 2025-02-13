// import mongoose
import mongoose from 'mongoose';

async function dbConnect(): Promise<Connection> {

    // check if we have a connection to the database or if it's currently connecting
  if (mongoose.connection.readyState === 0) {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error('Please define the MONGODB_URI environment variable.');
    }

    const mongooseOpts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as MongooseOptions;

    await mongoose.connect(mongoURI, mongooseOpts);
  }

  // return the connection object
  return mongoose.connection;
}

export default dbConnect;
