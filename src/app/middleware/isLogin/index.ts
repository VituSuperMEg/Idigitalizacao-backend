import jwt, { SigningKeyCallback } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { promisify } from "util";

interface IDecode extends SigningKeyCallback {
  id: string;
}

export async function isLogin(req: Request, res: Response, next: NextFunction) {
  const tokenAuth = req.headers.authorization;
  
  if (!tokenAuth) {
    return res.status(400).json('Necessário realizar login');
  }

  const [, token] = tokenAuth.split('');
  if (!token) {
    return res.status(400).json('Necessário realizar login');
  }

  try {
    const verifyAsync = promisify(jwt.verify);
    const decode = await verifyAsync(token, process.env.SECRET_KEY) as IDecode;
    req.userId = decode.id;
    return next();
  } catch (error) {
    console.log(error);
  }
}
