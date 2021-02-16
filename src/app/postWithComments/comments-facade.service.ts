import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommentsApiService } from './comments-api.service';
import { Injectable } from '@angular/core';
import { CommentsStateService } from './comments-state.service';

@Injectable()
export class CommentsFacadeService {
  constructor(
    private commentsState: CommentsStateService,
    private commentsApi: CommentsApiService
  ) {}

  isUpdating$(): Observable<boolean> {
    return this.commentsState.isUpdating$();
  }

  getComments$(): Observable<any> {
    console.log(this.commentsState.getComments$());
    return this.commentsState.getComments$();
  }

  loadComments(id: number) {
    return this.commentsApi
      .getComments(id)
      .pipe(tap((comments: any) => this.commentsState.setComments(comments)))
      .subscribe(
        () => this.commentsState.getComments$(),
        (error) => console.log(error),
        () => this.commentsState.setUpdating(false)
      );
  }

  addComment(comment: any) {
    console.log(comment); // {postID: 1, name: "dddd", body: "ddddd"}
    return this.commentsApi.addComment(comment).subscribe(
      (comment) => this.commentsState.addComment(comment),
      (error) => console.log(error),
      () => this.commentsState.setUpdating(false)
    );
  }
}
