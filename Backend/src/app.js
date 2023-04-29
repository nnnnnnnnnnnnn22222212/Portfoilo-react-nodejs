import express from "express";
import productRouter from "./routes/product";
import aboutmeRouter from "./routes/aboutme"
import skillRouter from "./routes/skill"
import categoryRouter from "./routes/category"
import authRouter from "./routes/auth"
import cors from "cors";
import mongoose from "mongoose";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
app.use("/api", aboutmeRouter);
app.use("/api", skillRouter);

mongoose.connect("mongodb://127.0.0.1/Assignment_Nodejs");

export const viteNodeApp = app

