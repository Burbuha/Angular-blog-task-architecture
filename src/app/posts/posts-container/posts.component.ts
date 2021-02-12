import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsFacadeService } from '../posts-facade.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Observable<Post[]>;

  isUpdating$: Observable<boolean>;

  constructor(private postService: PostsFacadeService) {
    this.posts = postService.getPosts$();
    this.isUpdating$ = postService.isUpdating$();
  }

  ngOnInit(): void {
    this.postService.loadPosts();
  }

  addPost(value: any): void {
    const title = value[0].trim();
    const body = value[1].trim();
    if (!title && !body) {
      return;
    }
    this.postService.addPost({ title, body } as Post);
  }
}
