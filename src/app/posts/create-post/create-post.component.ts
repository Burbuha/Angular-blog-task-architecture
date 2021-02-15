import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  @Output() onClickAddPost = new EventEmitter();

  constructor() {}

  addNewPost(value: string[]) {
    this.onClickAddPost.emit(value);
  }
}
