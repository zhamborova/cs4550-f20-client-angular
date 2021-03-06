import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})

export class TrueFalseQuestionComponent implements OnInit {


  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''}
  grading = false
  faCheck = faCheck;
  faTimes = faTimes;
  answerSelected = ""
  correctly = null
  @Input()
  answer = ''
  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () => this.answerChange.emit(this.answer)


  grade = () => {

    if (this.answerSelected != "") {
      this.grading = true
      this.correctly = this.answerSelected == this.question.correct
      this.answer = this.answerSelected;
      this.submitAnswer()
    }
  }
  selectAnswer = (event) => {
    this.answerSelected = event.target.value
  }

  displayTrueAnswer = () => {
    if (this.grading) {
      if (this.answerSelected == this.question.correct && this.answerSelected=="true"){
        return 'list-group-item-success';
    }
    if (this.answerSelected != this.question.correct && this.answerSelected == "true") {
      return 'list-group-item-danger';
    }
      if (this.answerSelected != this.question.correct && this.answerSelected == "false") {
        return 'list-group-item-success';
      }
   }
  }


  displayFalseAnswer = () => {
    if (this.grading) {
      if (this.answerSelected == this.question.correct && this.answerSelected=="false"){
        return 'list-group-item-success';
      }
      if (this.answerSelected != this.question.correct && this.answerSelected == "false") {
        return 'list-group-item-danger';
      }
      if (this.answerSelected != this.question.correct && this.answerSelected == "true") {
        return 'list-group-item-success';
      }
    }
  }
  ngOnInit(): void {
  }
}
