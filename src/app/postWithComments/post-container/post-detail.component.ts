import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { PostsFacadeService } from 'src/app/posts/posts-facade.service';
import { CommentsFacadeService } from '../comments-facade.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Observable<Post>;
  comments: Observable<Comment[]>;
  isUpdatingPost$: Observable<boolean>;
  isUpdatingComment$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsFacadeService,
    private commentService: CommentsFacadeService,
    private location: Location
  ) {
    this.post = postService.getPost$();
    this.comments = commentService.getComments$();
    this.isUpdatingPost$ = postService.isUpdating$();
    this.isUpdatingComment$ = commentService.isUpdating$();
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.loadPost(id);
    this.commentService.loadComments(id);
  }

  addComment(value: string): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const name = value[0].trim();
    const body = value[1].trim();
    const postID = id;
    if (!name && !body && !postID) {
      return;
    }
    this.commentService.addComment({ postID, name, body } as Comment);
  }

  deletePost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.deletePost(id);
    this.goBack();
  }

  saveChanges(value: any): void {
    const title = value[0].trim();
    const body = value[1].trim();
    if (!title && !body) {
      return;
    }
    this.postService.updatePost({ title, body } as Post);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
