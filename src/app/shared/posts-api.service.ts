import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root', // <--provides this service in the root ModuleInjector
})
export class PostsApiService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`?_limit=10`);
  }

  getPost(id: number): Observable<Post | undefined> {
    const url = `${id}`;
    return this.http.get<Post>(url);
  }

  updatePost(post: Post | number): Observable<Object> {
    console.log(post);
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
