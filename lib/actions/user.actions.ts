import User from "@/lib/models/user";
import dbConnect from "@/lib/db";

export async function createUser(name: string, email: string) {
  // make sure we're connected to the database
  // before doing anything!
  await dbConnect();

  // create a new user
  const user = await User.create({ name, email });
  return user;
}

export async function getAllUsers(){
  await dbConnect();

  const users = await User.find();
  return users
}





