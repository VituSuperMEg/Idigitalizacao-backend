import { Request, Response } from "express";
import { prisma } from "../../../service/database";

export async function listDocumento(req : Request, res : Response){
  
  const response = await prisma.documento.findMany();
  
  res.json(response);
}