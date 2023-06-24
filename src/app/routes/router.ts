import { Router} from "express";
import { createUser } from "../Controller/User/createUser";
import { listUser } from "../Controller/User/listUser";
import { updateUser } from "../Controller/User/updateUser";
import { deleteUser } from "../Controller/User/deleteUser";

export const router = Router();

// Rota Users
router.post('/user', createUser);
router.get('/user', listUser);
router.put('/user/:email', updateUser);
router.delete('/user/:id', deleteUser);