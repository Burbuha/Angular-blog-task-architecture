import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts?: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  addPost(value: any): void {
    const title = value[0].trim();
    const body = value[1].trim();
    if (!title && !body) {
      return;
    }
    this.postService.addPost({ title, body } as Post).subscribe((post) => {
      this.posts?.unshift(post);
    });
  }
}
