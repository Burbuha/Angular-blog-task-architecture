import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Comment } from '../shared/models/comment';

@Injectable()
export class CommentsApiService {
  constructor(private http: HttpClient) {}

  getComments(id: number): Observable<Comment | undefined> {
    const url = `${id}/comments`;
    return this.http.get<Comment>(url);
  }

  addComment(comment: Comment) {
    const id = comment.postID;
    const url = `${id}/comments`;
    return this.http.post<Comment>(url, comment);
  }
}
