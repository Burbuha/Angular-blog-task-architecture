import { Post } from 'src/app/shared/models/post';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css'],
})
export class PostPreviewComponent {
  @Input() post: Post = {
    id: 1,
    title: '',
    body: '',
  };

  constructor() {}
}
