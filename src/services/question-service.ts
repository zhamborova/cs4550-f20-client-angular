import {Injectable} from '@angular/core';
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://node-heroku-zhamborova.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
