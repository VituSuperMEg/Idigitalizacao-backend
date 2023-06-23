import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Página Home');
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})