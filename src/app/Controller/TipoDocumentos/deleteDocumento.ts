import { prisma } from './../../../service/database';
import { Request, Response } from "express";

export async function deleteDocumento(req: Request, res: Response){
  const { id } = req.params;
  
  const user = await prisma.documento.delete({
   where : { id : parseInt(id)}
  });
  res.json('Documento deleted successfully');
}