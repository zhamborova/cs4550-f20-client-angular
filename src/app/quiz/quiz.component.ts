import { Component, OnInit } from '@angular/core';
import {QuestionsServiceClient} from "../../services/question-service";
import { ActivatedRoute } from '@angular/router';
import {QuizzesServiceClient} from "../../services/quiz-service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private svc: QuestionsServiceClient, private quizzS: QuizzesServiceClient,
              private route: ActivatedRoute) { }
  questions = []
  quizId = ""
  quiz = {title:""}
  courseId = ""
  score = 0;
  amount = 0;
  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.courseId = ps.courseId;
      this.quizzS.findQuizById(this.quizId)
         .then(q => this.quiz = q)
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
      this.quizzS.findQuizAttempts(this.quizId)
        .then(attempts => {
          this.amount = attempts.length;
          this.score = attempts[this.amount-1].score
        })

    })
  }

  submitQuiz = () => {
    fetch(`https://node-heroku-zhamborova.herokuapp.com/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => console.log(result))

  }



}
