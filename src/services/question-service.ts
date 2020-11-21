import {Injectable} from '@angular/core';
const url = "https://node-heroku-zhamborova.herokuapp.com"
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`${url}/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
