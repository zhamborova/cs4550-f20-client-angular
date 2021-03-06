import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";
import {CourseTableComponent} from "./course-table/course-table.component";
import { QuizzesComponent } from './quizzes/quizzes.component';
import {QuizComponent} from "./quiz/quiz.component";

//assignment 8
const routes: Routes = [

  {path: "courses", component: CourseTableComponent},
  {path: "courses/:courseId/modules", component: CourseViewerComponent},
  {path: "courses/:courseId/modules/:moduleId/lessons", component: CourseViewerComponent},
  {path: "courses/:courseId/modules/:moduleId/lessons/:lessonId/topics", component: CourseViewerComponent},
  {path: "courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets", component: CourseViewerComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  { path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent },
  {path: "", component: CourseTableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
