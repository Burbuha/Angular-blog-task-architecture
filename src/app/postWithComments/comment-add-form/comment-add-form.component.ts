import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.css'],
})
export class CommentAddFormComponent {
  @Output() onClickAddComment = new EventEmitter();

  constructor() {}

  addNewComment(value: string[]) {
    this.onClickAddComment.emit(value);
  }
}
