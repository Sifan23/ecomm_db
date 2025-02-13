import { Schema, model, Document, models } from "mongoose";

// define the post interface for typescript
interface Post {
   title: string;
   content: string;
   author: {
    name: string;
    email: string;
   }
}

// create the post schema
const postSchema = new Schema<Post>({
    title: String,
    content: String,
    author: {
        name: String,
        email: String
    }
})

// create the post model
const Post = models?.Post || model<Post>('Post', postSchema);
export default Post