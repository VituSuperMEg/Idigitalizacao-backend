import { Request, Response } from "express";
import { prisma } from "../../../service/database";

export async function getOrgaoWithUnidade(req: Request, res: Response){
  
  const { orgaoId } = req.params;

  const orgao = await prisma.orgao.findUnique({
    where : { id : parseInt(orgaoId)},
    include : {unidade_orcamentaria : true}
  })
  res.json(orgao);
}
