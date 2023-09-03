import express, { Express, Request, Response } from "express";
import cors from 'cors';
import payment from './controllers/payment';

const app: Express = express();

app.use(cors({
    origin: ['https://localhost:3001']
}))

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', payment)
app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});