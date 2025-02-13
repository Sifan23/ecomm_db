import {Schema, model, Document} from "mongoose";

// define the user interface for typescript
interface User {
    name: string;
    email: string;
}

// create the user schema
const userSchema = new Schema<User>({
    name: String,
    email: String
})

