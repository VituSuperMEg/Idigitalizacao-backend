import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { router } from './app/routes/router';
import cors  from 'cors';


const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, () => {
  console.log(`🎯✅ Servidor rodando na porta ${port}`);
})