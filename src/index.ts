import cors from 'cors';
import express from 'express';
import { Logger } from 'node-colorful-logger';
import { UnknownRoutesHandler } from './middlewares/unknowRoute.handler';
import { ExceptionsHandler } from './middlewares/exceptions.handler';
const log = new Logger();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.all('*', UnknownRoutesHandler)
app.use(ExceptionsHandler)

export default app;