import express from "express";
import bodyParser from "body-parser";
import loginRoutes from './routes/user.js'
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/user', loginRoutes)

const PORT = process.env.PORT || 5000;
mongoose.set("strictQuery", false);
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


