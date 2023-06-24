import express from 'express';
import { router } from './app/routes/router';

const app = express();
const port = 3001;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})