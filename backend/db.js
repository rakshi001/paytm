import mongoose from 'mongoose';

//first create a user schema
//then create a model[more like a table ]
//then export

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('Mongodb connected'))
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;
