import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../shared/models/comment';

@Injectable()

export class CommentsApiService {

  private readonly postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getComments(id: number): Observable<Comment | undefined> {
    const url = `${this.postsUrl}/${id}/comments`;
    return this.http.get<Comment>(url);
  }

  addComment(comment: Comment) {
    const id = comment.postID;
    const url = `${this.postsUrl}/${id}/comments`;
    return this.http
      .post<Comment>(url, comment);
  }

}
