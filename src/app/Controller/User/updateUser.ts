import { Request, Response } from "express";
import { prisma } from "../../../service/database";

export async function updateUser(req : Request, res : Response) {
  const { email } = req.params;

  const { nome } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  const updateUser = await prisma.usuario.update({
    where: { email },
    data: {
      nome
    }
  })
  res.json('User updated successfully');
}