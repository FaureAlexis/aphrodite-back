import { Quiz } from '../../../types/objects/Quiz';
import quiz from '../../../data/quizprotection.json';

export class QuizService {
  public getQuiz(): any {
    return quiz;
  }

  public checkQuiz(answers: any): any {
    const q: Array<Quiz> = this.getQuiz();
    let t: Array<number> = [];
    let score: number = 0;
    q.forEach((question: Quiz) => {
      t.push(question.correct);
    });
    answers.forEach((answer: Array<number>, index: number) => {
      if (answer[1] === t[index]) {
        score++;
      }
    });
    return score;
  }
}
