export interface Quiz {
    id: number;
    name: string;
    questions: string,
    answers: [
        id: string,
        text: string
    ]
    correct: number,
    explanation: string
}