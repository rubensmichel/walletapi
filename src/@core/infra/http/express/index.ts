import express, { Express, Request, Response } from 'express';
import { CreateRouteUseCase } from '../../../application/create-user.use-case';
import { UserInMemoryRepository } from '../../db/in-memory/user-in-memory.repository';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const userRepo = new UserInMemoryRepository();

app.post('/user', async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(userRepo);
  const output = await createUseCase.execute(req.body);
  res.status(200).json(output);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
