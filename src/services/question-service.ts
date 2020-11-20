import {Injectable} from '@angular/core';
const url = "https://localhost:3000"
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`${url}/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
