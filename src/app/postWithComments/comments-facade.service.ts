import { PostsApiService } from './../shared/posts-api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommentsApiService } from './comments-api.service';
import { Injectable } from '@angular/core';
import { CommentsStateService } from './comments-state.service';
import { PostsState } from '../shared/posts.state.service';

@Injectable()
export class CommentsFacadeService {
  constructor(
    //private commentsState: CommentsStateService,
    private postsState: PostsState,
    private postApi: PostsApiService //private commentsApi: CommentsApiService
  ) {}

  isUpdating$(): Observable<boolean> {
    //return this.commentsState.isUpdating$();
    return this.postsState.isUpdatingComment$();
  }

  getComments$(): Observable<any> {
    //return this.commentsState.getComments$();
    return this.postsState.getComments$();
  }

  loadComments(id: number) {
    return this.postApi
      .getComments(id)
      .pipe(tap((comments: any) => this.postsState.setComments(comments)))
      .subscribe(
        () => this.postsState.getComments$(),
        (error) => console.log(error),
        () => this.postsState.setUpdatingComments(false)
      );

    // return this.commentsApi
    //   .getComments(id)
    //   .pipe(tap((comments: any) => this.commentsState.setComments(comments)))
    //   .subscribe(
    //     () => this.commentsState.getComments$(),
    //     (error) => console.log(error),
    //     () => this.commentsState.setUpdating(false)
    //   );
  }

  addComment(comment: any) {
    return this.postApi.addComment(comment).subscribe(
      (comment: any) => this.postsState.addComment(comment),
      (error) => console.log(error),
      () => this.postsState.setUpdating(false)
    );

    // return this.commentsApi.addComment(comment).subscribe(
    //   (comment) => this.commentsState.addComment(comment),
    //   (error) => console.log(error),
    //   () => this.commentsState.setUpdating(false)
    // );
  }
}
