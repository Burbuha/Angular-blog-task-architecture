import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.css'],
})
export class PostEditComponent implements OnInit {
  @Input() post: Post = {
    id: 1,
    title: '',
    body: '',
  };

  @Output() onChangePost = new EventEmitter();
  @Output() onDeletePost = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changePost(value: string[]): void {
    this.onChangePost.emit(value);
  }
  deletePost(): void {
    this.onDeletePost.emit();
  }
}
