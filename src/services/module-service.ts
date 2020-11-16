import {Injectable} from '@angular/core';
const url = 'https://wbdv-generic-server.herokuapp.com/api/zhamborova'
@Injectable()
export class ModuleService {
  findModulesForCourse = (courseId) =>
    fetch(`${url}/courses/${courseId}/modules`)
      .then(response => response.json())

  createModuleForCourse = (course) =>
    fetch(`${url}/courses/${course._id}/modules`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Module'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  deleteModule = (module) =>
    fetch(`${url}/modules/${module._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
