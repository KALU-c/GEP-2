import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import { json } from 'express';
// import mongoose from 'mongoose';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));
// mongoose.connect("mongodb://localhost:27017/GEP");

app.post("/register", (req, res) => {
  const { values } = req.body;
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));