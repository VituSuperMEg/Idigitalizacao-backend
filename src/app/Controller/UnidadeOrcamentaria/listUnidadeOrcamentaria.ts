import { Request, Response } from "express";
import { prisma } from "../../../service/database";

export async function listUnidade(req : Request, res : Response){
  
  const response = await prisma.unidade.findMany();
  
  res.json(response);
}