import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './models/post';
import { PostWithComments } from './models/postWithComments';

@Injectable({
  providedIn: 'root', // <--provides this service in the root ModuleInjector
})
export class PostsState {
  private updating$ = new BehaviorSubject(false);
  private updatingComments$ = new BehaviorSubject(false);

  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  private post$: BehaviorSubject<Post> = new BehaviorSubject<Post>({
    id: 1,
    body: '',
    title: '',
  });
  private comments$: BehaviorSubject<Comment[]> = new BehaviorSubject<
    Comment[]
  >([]);

  // private postsWithComments: BehaviorSubject<
  //   PostWithComments[]
  // > = new BehaviorSubject<PostWithComments[]>([]);

  //Comments

  isUpdatingComment$(): Observable<boolean> {
    return this.updatingComments$.asObservable();
  }

  setUpdatingComments(isUpdating: boolean): void {
    this.updatingComments$.next(isUpdating);
  }

  getComments$(): Observable<Comment[]> {
    return this.comments$.asObservable();
  }

  setComments(comments: Comment[]): void {
    this.comments$.next(comments);
  }

  addComment(comment: Comment): void {
    const currentValue = this.comments$.getValue();
    this.comments$.next([...currentValue, comment]);
  }

  //Posts
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
