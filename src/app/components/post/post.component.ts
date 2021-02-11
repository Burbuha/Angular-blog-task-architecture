import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Output() saveChanges = new EventEmitter();
  @Output() deletePost = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChangePost(): void {
    this.saveChanges.emit();
  }
  onDeletePost(): void {
    this.deletePost.emit();
  }
}
