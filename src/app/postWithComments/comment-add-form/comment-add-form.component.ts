import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.css'],
})
export class CommentAddFormComponent implements OnInit {
  @Output() addComment = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addNewComment(value: any) {
    this.addComment.emit(value);
  }
}
