import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';
import { QuizService } from './quiz.service';

const QuizController: Router = Router();
const Quiz = new QuizService();

QuizController.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(Quiz.getQuiz());
  } catch (err) {
    next(err);
  }
});

QuizController.post('/', (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.data) {
    return res.status(400).json({
      message: 'Missing body data',
    });
  }
  try {
    res.json(Quiz.checkQuiz(req.body.data));
  } catch (err) {
    next(err);
  }
});

export default QuizController;
