import {Injectable} from '@angular/core';
const url = 'https://wbdv-generic-server.herokuapp.com/api/zhamborova'
@Injectable()
export class TopicService {
  findTopicsForLesson = (lessonId) =>
    fetch(`${url}/lessons/${lessonId}/topics`)
      .then(response => response.json())


}
