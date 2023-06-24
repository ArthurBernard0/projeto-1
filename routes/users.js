import express from "express";
import { getUsers, createUsers, updateUsers, deleteUsers } from "../controllers/user.js";


const router = express.Router();

router.get("/", getUsers);

router.post("/users", createUsers);

router.put("/users/:id", updateUsers);

router.delete("/users/:id", deleteUsers);

export default router;