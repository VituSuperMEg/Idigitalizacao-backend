import { Request, Response } from "express";
import { prisma } from "../../../service/database";

export async function createUnidade(req: Request, res: Response){
   
  const { descricao } = req.body;

  const response = await prisma.unidade.create({
    data : {
      descricao
    }
  });

  return res.status(201).json(response);
}