import { Component, Input } from '@angular/core';

import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post: Post = {
    id: 1,
    title: '',
    body: '',
  };

  constructor() {}
}
