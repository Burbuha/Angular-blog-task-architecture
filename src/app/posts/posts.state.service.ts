import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable()
export class PostsState {

  private updating$ = new BehaviorSubject(false);

  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  // public readonly posts: Observable<Post[]> = this.posts$.asObservable();

  isUpdating$() {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  getPosts$() {
    return this.posts$.asObservable();
  }

  setPosts(posts: Post[]) {
    this.posts$.next(posts);
  }

  addPost(post: Post) {
    const currentValue = this.posts$.getValue();
    this.posts$.next([...currentValue, post]);
  }

  updatePost(updatedPost: Post) {
    const posts = this.posts$.getValue();
    const indexOfUpdated = posts.findIndex(post => post.id === updatedPost.id);
    posts[indexOfUpdated] = updatedPost;
    this.posts$.next([...posts]);
  }

  removePost(postRemove: Post) {
    const currentValue = this.posts$.getValue();
    this.posts$.next(currentValue.filter(post => post !== postRemove));
  }
}




