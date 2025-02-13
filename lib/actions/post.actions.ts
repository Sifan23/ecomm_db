import Post from "@/lib/models/post"
import dbConnect from "@/lib/db"

// create a new post
export async function createPost(title:string, content:string, name:string, email:string){
    //make sure we're connected to the database
    // before doing anything!
    await dbConnect();

    //create a new post
    const post = await Post.create({title, content, author: {name, email}});
    return post
}

// get all posts
export async function getAllPosts(){
    await dbConnect();

    const posts = await Post.find();
    return posts
}