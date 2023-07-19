import { Request, Response } from "express";
import { prisma } from "../../../service/database";

export async function createDocumento(req: Request, res: Response) {
  const { descricao } = req.body;
  
  const response = await prisma.documento.create({
    data : {
      descricao
    }
  })
  res.status(201).json(response);
}