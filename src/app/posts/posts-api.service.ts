import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable()
export class PostsApiService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}?_limit=10`);
  }

  getPost(id: number): Observable<Post | undefined> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  updatePost(post: Post | number): Observable<any> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.put(url, post);
  }

  deletePost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete<Post>(url);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post);
  }
}
