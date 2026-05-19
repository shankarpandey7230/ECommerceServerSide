import mongoose from "mongoose";

export const connectDB = () => {
  return mongoose
    .connect("mongodb://127.0.0.1:27017", {
      dbName: "ECommerce24",
    })
    .then((c) => console.log(`Database connected to ${c.connection.host}`));
};
