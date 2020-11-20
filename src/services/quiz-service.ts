import {Injectable} from '@angular/core';

const url = "https://localhost:3000"
@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch(`${url}/api/quizzes`)
      ///dt
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`${url}/api/quizzes/${qid}`)
      .then(response => response.json())
}
