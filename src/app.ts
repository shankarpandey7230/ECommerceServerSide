import express, { NextFunction, Request, Response } from "express";

// routes importing
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
const port = 8000;
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(400).json({
    success: true,
    message: "Some Error",
  });
});
app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
