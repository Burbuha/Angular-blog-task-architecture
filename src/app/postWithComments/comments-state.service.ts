import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
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
    console.log(this.updatingComments$.asObservable());
    return this.updatingComments$.asObservable();
  }

  setUpdating(isUpdating: boolean): void {
    this.updatingComments$.next(isUpdating);
  }

  getComments$(): Observable<Comment[]> {
    console.log(this.comments$.asObservable());
    return this.comments$.asObservable();
  }

  setComments(comments: Comment[]): void {
    console.log(this.comments$.next(comments));
    this.comments$.next(comments);
  }

  addComment(comment: Comment): void {
    const currentValue = this.comments$.getValue();
    this.comments$.next([...currentValue, comment]);
  }
}
