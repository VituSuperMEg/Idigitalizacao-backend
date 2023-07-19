import { Request, Response } from "express";
import { prisma } from "../../../service/database";

export async function listUser(req : Request, res : Response){
  
  const users = await prisma.usuario.findMany();
  
  res.json(users);
}