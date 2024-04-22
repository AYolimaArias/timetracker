import express from "express";
import { getUsers, getUsersById } from "../services/user-service";
import { deleteUsers, postUsers, putUsers } from "../data/users-data";
import { User } from "../models/user";

const userRouter = express.Router();

//GET
userRouter.get("/", async (_req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
});

//GET ID:
userRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await getUsersById(id);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(400).send("User no exist");
  }
});

//POST
userRouter.post("/", async (req, res) => {
  //logica para insertar un nuevo usuario
  try {
    const createUser: User[] = await postUsers(req.body);
    res.status(201).json(createUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

//DELETE
userRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await deleteUsers(id);
    res.status(204).json(deleteUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

//PUT
userRouter.put("/:id", async (req, res) => {
  try {
    const updateUser = await putUsers(req.body);
    res.status(200).json(updateUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

export default userRouter;
