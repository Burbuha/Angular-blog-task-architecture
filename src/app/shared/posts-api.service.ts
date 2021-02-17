import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Post } from './models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  LIMIT: string = `?_limit=50`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.LIMIT);
  }

  getPost(id: number): Observable<Post | undefined> {
    const url = `${id}`;
    return this.http.get<Post>(url);
  }

  updatePost(post: Post | number): Observable<Object> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${id}`;
    return this.http.put(url, post);
  }

  deletePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${id}`;
    return this.http.delete<Post>(url);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('', post);
  }
}
