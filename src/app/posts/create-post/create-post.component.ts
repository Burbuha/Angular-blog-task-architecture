import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  @Output() onClickAddPost = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  addNewPost(value: any) {
    this.onClickAddPost.emit(value);
  }
}
