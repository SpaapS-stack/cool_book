import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/start')
.then(() => console.log("Connected to yourDB-name database"))
.catch((err) => console.log(err));

const PostSchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true }
})

const UserScheme = mongoose.Schema({
  login: {type: String, required: true},
  password:{type: String, required: true}
})

export const Users = mongoose.model('user', UserScheme);

export const Posts = mongoose.model('posts', PostSchema)