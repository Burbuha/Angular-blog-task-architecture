import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from './models/post';

@Injectable()
export class PostsState {
  private updating$ = new BehaviorSubject(false);
  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  private post$: BehaviorSubject<any> = new BehaviorSubject<any>(0);

  isUpdating$() {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  getPosts$() {
    return this.posts$.asObservable();
  }

  getPost() {
    return this.post$.asObservable();
  }

  setPosts(posts: Post[]) {
    this.posts$.next(posts);
  }

  setPost(post: Post) {
    this.post$.next(post);
  }

  addPost(post: Post) {
    const currentValue = this.posts$.getValue();
    this.posts$.next([...currentValue, post]);
  }

  updatePost(updatedPost: Post) {
    const posts = this.posts$.getValue();
    const indexOfUpdated = posts.findIndex(
      (post) => post.id === updatedPost.id
    );
    posts[indexOfUpdated] = updatedPost;
    this.posts$.next([...posts]);
  }

  removePost(postRemove: Post) {
    const currentValue = this.posts$.getValue();
    this.posts$.next(currentValue.filter((post) => post !== postRemove));
  }
}
