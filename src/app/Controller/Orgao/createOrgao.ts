import { Request, Response } from "express";
import { prisma } from "../../../service/database";

export async function createOrgao(req: Request, res: Response) {
   
  const {
    descricao,
    cpf,
    responsavel,
    expediente,
    cod_orgao,
    unidadeId
  } = req.body;

  const response = await prisma.orgao.create({
    data : {
      descricao,
      cpf,
      responsavel,
      expediente,
      cod_orgao,
      unidadeId
    }
  });

  return res.status(201).json(response);
}