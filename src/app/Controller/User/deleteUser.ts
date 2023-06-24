import { prisma } from './../../../service/database';
import { Request, Response } from "express";

export async function deleteUser(req: Request, res: Response){
  const { id } = req.params;
  
  const user = await prisma.user.delete({
   where : { id : parseInt(id)}
  });
  res.json('User deleted successfully');
}