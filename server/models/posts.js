import mongoose from "mongoose";

const postScheme = mongoose.Schema({
    title: String,
    subtitle: String, 
    content: String, 
    tags: String, 
    image: String,
    createdAt:{ 
        type: Date, 
        default: new Date(),
    },
});

const Post = mongoose.model("Post",postScheme);

export default Post;