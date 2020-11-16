import {Injectable} from '@angular/core';
const url = 'https://wbdv-generic-server.herokuapp.com/api/zhamborova'
@Injectable()
export class LessonService {

  findLessonsForModule = (moduleId) =>
    fetch(`${url}/modules/${moduleId}/lessons`)
      .then(response => response.json())


}
