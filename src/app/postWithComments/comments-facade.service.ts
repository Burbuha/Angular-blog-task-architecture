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
  ) { }

  isUpdating$(): Observable<any> {
    return this.commentsState.isUpdating$();
  }

  getComments$(): Observable<any> {
    // здесь мы просто передаем состояние без каких-либо проекций
    // может случиться так, что необходимо объединить два или более потоков и вернуть их компонентам
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
    return (
      this.commentsApi
        .addComment(comment)
        .subscribe(
          (comment) => this.commentsState.addComment(comment),
          (error) => console.log(error),
          () => this.commentsState.setUpdating(false)
        )
    );
  }
}
