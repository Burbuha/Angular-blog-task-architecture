import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentApiService {
  readonly postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getComments(id: number): Observable<Comment | undefined> {
    const url = `${this.postsUrl}/${id}/comments`;
    return this.http.get<Comment>(url);
  }

  addComment(comment: Comment) {
    const id = comment.postID;
    const url = `${this.postsUrl}/${id}/comments`;
    return this.http
      .post<Comment>(url, comment, this.httpOptions);
  }

}