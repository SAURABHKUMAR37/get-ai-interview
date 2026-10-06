import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import cookieParser from 'cookie-parser';
dotenv.config();
import cors from 'cors';
import authRouter from './routes/auth.route.js';
import userRouter from "./routes/user.route.js"; 
import interviewRouter from './routes/interview.route.js';
import paymentRouter from './routes/payment.route.js';

const app=express();

// Comma-separated list of allowed origins, e.g.
// CLIENT_URL=http://localhost:5173,https://getaiinterview-client.onrender.com
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

const PORT = process.env.PORT || 6000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDb();
});
