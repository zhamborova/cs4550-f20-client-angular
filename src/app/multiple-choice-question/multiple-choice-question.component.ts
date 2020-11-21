import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {


    ngOnInit(): void {

    }

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' }
  grading = false
  faCheck = faCheck; faTimes = faTimes
  answerSelected = ""
  correctly = null
  @Input()
  answer = ''
  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () =>
    this.answerChange.emit(this.answer)


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

  displayTrueAnswer = (qs) => {
    if (this.grading) {
      if(this.question.correct === qs ){
        return 'list-group-item-success';
      }
      if (this.answerSelected != this.question.correct && this.answerSelected == qs) {
        return 'list-group-item-danger';
      }
    }
  }


}

