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


  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.quizzS.findQuizById(this.quizId)
         .then(q => this.quiz = q)
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);

    })
  }

}
