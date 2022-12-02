import cors from 'cors';
import express from 'express';
import { Logger } from 'node-colorful-logger';
import { UnknownRoutesHandler } from './middlewares/unknowRoute.handler';
import { ExceptionsHandler } from './middlewares/exceptions.handler';
import QuizController from './routes/quiz/quiz.controller';
const log = new Logger();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Aphrodite'));
app.use('/api/quiz', QuizController);
app.all('*', UnknownRoutesHandler)
app.use(ExceptionsHandler)
app.listen(3000, () => log.info('App listening on port 3000'))
export default app;
