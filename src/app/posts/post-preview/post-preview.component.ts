import { Post } from 'src/app/shared/models/post';
import { Component, OnInit, Input } from '@angular/core';
import { PostsApiService } from 'src/app/shared/posts-api.service';

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
