import {Schema, model, Document, models } from "mongoose";

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

const User = models?.User || model<User>('User', userSchema);
export default User