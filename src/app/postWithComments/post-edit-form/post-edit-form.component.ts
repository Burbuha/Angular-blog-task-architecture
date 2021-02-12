import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.css'],
})
export class PostEditComponent implements OnInit {
  @Input() post?: Post;

  @Output() saveChanges = new EventEmitter();
  @Output() deletePost = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChangePost(value: any): void {
    this.saveChanges.emit(value);
  }
  onDeletePost(): void {
    this.deletePost.emit();
  }
}
