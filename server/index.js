import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { json } from 'express';
import mongoose from 'mongoose';
import { User } from './schema.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import nodemailer from 'nodemailer';
import { sendEmail } from './welcomePage.js';


dotenv.config();
const app = express({ path: '.env' });
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_DB;

app.use(cors({
  origin: ["https://gep-frontend.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(morgan("tiny"));
app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
await mongoose.connect(uri);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function createUser(userData) {
  const newUser = new User(userData);

  try {
    await newUser.save();
    console.log("User added successfully!");
    await sendConfirmationEmail(userData.name, userData.age, userData.education, userData.email, userData.phone);
  } catch(err) {
    console.log(err);
  }
}

async function checkUser(userData) {
  const { phone } = userData;
  
  try {
    const user = await User.find({ phone: phone }).exec();
    return user.length > 0;
  } catch (err) {
    console.log(err);
  }
}

async function sendConfirmationEmail(name, age, education, email, phone) {
  const html = sendEmail(name, age, education, email, phone);
  let from = `GEP <endekaluzemenu2134@gmail.com>`
  const mailOptions = {
    from: from,
    to: email,
    subject: 'Registration Confirmation',
    text: 'Thank you for registering!',
    html: html
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent');
  } catch (err) {
    console.log('Error sending confirmation email', err);
  }
}

app.post("/register", async (req, res) => {
  const { values } = req.body;

  try {
    const userExist = await checkUser(values);
    if (userExist) {
      res.status(400).json({ message: "Phone number is already registered" });
    } else {
      await createUser(values);
      res.status(200).json({ message: "User registered successfully" });
    }
  } catch(err) {
    res.status(500).json({ message: "An error occurred" });
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
