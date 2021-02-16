import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root', // <--provides this service in the root ModuleInjector
})
export class PostsState {
  private updating$ = new BehaviorSubject(false);
  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  private post$: BehaviorSubject<Post> = new BehaviorSubject<Post>({
    id: 1,
    body: '',
    title: '',
  });

  isUpdating$() {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  getPosts$(): Observable<Post[]> {
    return this.posts$.asObservable();
  }

  getPost(): Observable<Post> {
    return this.post$.asObservable();
  }

  setPosts(posts: Post[]): void {
    this.posts$.next(posts);
  }

  setPost(post: Post): void {
    this.post$.next(post);
  }

  addPost(post: Post): void {
    const currentValue = this.posts$.getValue();
    this.posts$.next([post, ...currentValue]);
  }

  updatePost(updatedPost: Post): void {
    const posts = this.posts$.getValue();
    const indexOfUpdated = posts.findIndex(
      (post) => post.id === updatedPost.id
    );
    posts[indexOfUpdated] = updatedPost;
    this.posts$.next([...posts]);
  }

  removePost(id: number | Post): void {
    const currentValue = this.posts$.getValue();
    this.posts$.next(currentValue.filter((post) => post.id !== id));
  }
}
