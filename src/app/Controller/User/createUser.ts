import { Request, Response } from "express";
import { hash } from 'bcrypt';
import { prisma } from "../../../service/database";

export async function createUser(req: Request, res: Response) {

  try {
    const { nome, email, password } = req.body;
    
    const senha = await hash(password, 10);
     
    const response = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha
      }
    });

    res.status(201).json(response);
    console.log('✅ User created successfully');
  }catch(error){
    console.log(error);
  }
}