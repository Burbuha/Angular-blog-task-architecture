import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Comment } from '../shared/models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsStateService {
  private updatingComments$ = new BehaviorSubject(false);

  private comments$: BehaviorSubject<Comment[]> = new BehaviorSubject<
    Comment[]
  >([]);

  isUpdating$(): Observable<boolean> {
    return this.updatingComments$.asObservable();
  }

  setUpdating(isUpdating: boolean): void {
    this.updatingComments$.next(isUpdating);
  }

  getComments$(): Observable<Comment[]> {
    return this.comments$.asObservable();
  }

  setComments(comments: Comment[]): void {
    this.comments$.next(comments);
  }

  addComment(comment: Comment): void {
    const currentValue = this.comments$.getValue();
    this.comments$.next([...currentValue, comment]);
  }
}
