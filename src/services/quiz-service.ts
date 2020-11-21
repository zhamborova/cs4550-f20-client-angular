import {Injectable} from '@angular/core';

const url = "https://node-heroku-zhamborova.herokuapp.com"
@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch(`${url}/api/quizzes`)
      ///dt
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`${url}/api/quizzes/${qid}`)
      .then(response => response.json())

  findQuizAttempts = (qid) =>
    fetch(`${url}/api/quizzes/${qid}/attempts`)
      .then(response => response.json())

}
