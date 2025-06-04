import { getUser, updateUser } from "../controller/user.js";
import express from "express";

const userRouter=express.Router();

userRouter.get('/',getUser);
userRouter.get('/:id',updateUser);

export default userRouter;