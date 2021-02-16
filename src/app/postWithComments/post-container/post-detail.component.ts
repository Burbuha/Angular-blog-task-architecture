import { Observable } from 'rxjs';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/shared/models/post';
import { Comment } from 'src/app/shared/models/comment';

import { CommentsFacadeService } from './../comments-facade.service';
import { PostsFacadeService } from 'src/app/shared/posts-facade.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Observable<Post>;
  comments: Observable<Comment[]>;

  isUpdating$: Observable<boolean>;
  isUpdatingComment$: Observable<boolean>;

  private id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private route: ActivatedRoute,
    private postService: PostsFacadeService,
    private commentsService: CommentsFacadeService
  ) {
    this.comments = commentsService.getComments$();
    this.isUpdatingComment$ = commentsService.isUpdating$();
    this.post = postService.getPost$();
    this.isUpdating$ = postService.isUpdating$();
  }

  ngOnInit(): void {
    this.postService.loadPost(this.id);
    this.commentsService.loadComments(this.id);
    console.log(this.post);

    // this.route.params.subscribe((params) => {
    //   this.id = params.id;
    // });
  }

  addComment(value: string[]): void {
    const name = value[0].trim();
    const body = value[1].trim();
    const postID = this.id;
    if (!name && !body && !postID) {
      return;
    }
    this.commentsService.addComment({ postID, name, body } as Comment);
  }

  saveChanges(value: string[]): void {
    console.log(value);
    const title = value[0].trim();
    const body = value[1].trim();
    const id = this.id;
    this.postService.updatePost({ id, title, body } as Post);
  }

  deletePost(): void {
    this.postService.deletePost(this.id);
  }
}
