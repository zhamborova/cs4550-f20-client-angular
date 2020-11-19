import {Injectable} from '@angular/core';


@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch('https://node-heroku-zhamborova.herokuapp.com/api/quizzes')
      ///dt
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://node-heroku-zhamborova.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
