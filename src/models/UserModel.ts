import mongoose from "mongoose";
import { IUser, userSchema } from "./userSchema.js";

export const User = mongoose.model<IUser>("User", userSchema);
