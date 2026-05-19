import express from "express";

// routes importing
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleWare } from "./middlewares/error.js";

const port = 8000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);

app.use(errorMiddleWare);
const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server is working on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};

startServer();
