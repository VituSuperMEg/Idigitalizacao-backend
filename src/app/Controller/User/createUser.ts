import { Request, Response } from "express";
import { hash } from 'bcrypt';
import { prisma } from "../../../service/database";

export async function createUser(req: Request, res: Response) {

  try {
    const { name, email, password } = req.body;
    
    const senha = await hash(password, 10);
     
    const response = await prisma.user.create({
      data: {
        name,
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