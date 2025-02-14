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

// function for taking multiple users
type UserArray = {name:string, email:string}[]
export async function createMultipleUsers(users: UserArray){
  // make sure we're connected to the database
  // before doing anything!
  await dbConnect();

  // create multiple users
  const Users = await User.create(users);
  return Users
}

//function to getAllUsers
export async function getAllUsers(){
  await dbConnect();

  const users = await User.find();
  return users
}

// function to find user by name
export async function findUserByName(name:string){
  // make sure we're connected to the database
  // before doing anything!
  await dbConnect();

  // find user by name
  const user = await User.find({name});
  return user;
}




