import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import { json } from 'express';
import mongoose from 'mongoose';
import { User } from './schema.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/GEP");

async function createUser(userData) {
  const newUser = new User(userData);

  try {
    await newUser.save();
    console.log("User added successfully!");
    // mongoose.connection.close();
  } catch(err) {
    console.log(err);
  }
}

async function checkUser(userData) {
  const { phone } = userData;
  
  try {
    const user = await User.find({phone: phone}).exec();
    return user;
  } catch (err) {
    console.log(err);
  }
}

app.post("/register", async (req, res) => {
  const { values } = req.body;

  try {
    const userExist = await checkUser(values);
    if(isNaN(userExist)) {
      res.status(400).json({message: "Phone number is already registered"});
    } else {
      await createUser(values);
      res.status(200).json({message: "User registered successfully"});
    }
  } catch(err) {
    res.status(500).json({message: "An error occurred"});
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));