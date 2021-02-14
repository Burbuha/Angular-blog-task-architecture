import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Comment } from '../shared/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsStateService {
  private updatingComments$ = new BehaviorSubject(false);

  private comments$: BehaviorSubject<Comment[]> = new BehaviorSubject<Comment[]>([]);

  isUpdating$() {
    return this.updatingComments$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updatingComments$.next(isUpdating);
  }

  getComments$() {
    return this.comments$.asObservable();
  }

  setComments(comments: Comment[]) {
    this.comments$.next(comments);
  }

  addComment(comment: Comment) {
    const currentValue = this.comments$.getValue();
    this.comments$.next([...currentValue, comment]);
  }
}
