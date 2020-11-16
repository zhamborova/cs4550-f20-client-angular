import {Injectable} from '@angular/core';

const url = 'https://wbdv-generic-server.herokuapp.com/api/zhamborova'
@Injectable()
export class CourseService {
  fetchAllCourses = () =>
    fetch(`${url}/courses`)
      .then(response => response.json())

  fetchCourse = (id) =>
    fetch(`${url}/courses/${id}`)
      .then(response => response.json())



  createCourse = () =>
    fetch(`${url}/courses`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Course'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  updateCourse = (course) =>
    fetch(`${url}/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  deleteCourse = (course) =>
    fetch(`${url}/courses/${course._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
