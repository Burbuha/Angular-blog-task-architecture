import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsFacadeService } from '../posts-facade.service';
//import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  posts?: Post[];
  // post?: Post;
  //newPost: Post = new Post();

  isUpdating$: Observable<boolean>;

  constructor(private postService: PostsFacadeService) {
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
