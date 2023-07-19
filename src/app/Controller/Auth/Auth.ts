import { Request, Response } from "express";
import { prisma } from "../../../service/database";
import { compare } from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';

export async function Auth(req : Request, res : Response) {
  const { email, senha } = req.body;

  const user = await prisma.usuario.findFirst({ where : { email } });

  if (!user) {
    return res.status(400).json('Usuário não encontrado.');
  }

  const passwordMatch = await compare(senha, user.senha);

  if (passwordMatch) {
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY as Secret, { expiresIn: '1h' })  ;
    res.status(200).json({ token });
  } else {
    res.status(401).json('Credenciais inválidas.');
  }
}