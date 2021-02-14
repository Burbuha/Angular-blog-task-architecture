import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostsApiService } from './posts-api.service';
import { Injectable } from '@angular/core';
import { PostsState } from './posts.state.service';
import { Post } from 'src/app/shared/models/post';
import { Location } from '@angular/common';

@Injectable()

export class PostsFacadeService {

  constructor(
    private postsApi: PostsApiService,
    private postsState: PostsState,
    private location: Location,
  ) { }

  isUpdating$(): Observable<any> {
    return this.postsState.isUpdating$();
  }

  getPosts$(): Observable<any> {
    // здесь мы просто передаем состояние без каких-либо проекций
    // может случиться так, что необходимо объединить два или более потоков и вернуть их компонентам
    return this.postsState.getPosts$();
  }

  getPost$(): Observable<any> {
    return this.postsState.getPost();
  }

  loadPosts() {
    return this.postsApi.getPosts()
      .pipe(tap(posts => this.postsState.setPosts(posts)))
      .subscribe(
        () => this.postsState.getPosts$(),
        (error) => console.log(error),
        () => this.postsState.setUpdating(false)
      );
  }

  loadPost(id: number) {
    return this.postsApi
      .getPost(id)
      .pipe(tap((post: any) => this.postsState.setPost(post)))
      .subscribe(
        () => this.postsState.getPost(),
        (error) => console.log(error),
        () => this.postsState.setUpdating(false)
      );
  }

  addPost(post: Post) {
    return (
      this.postsApi
        .addPost(post)
        // .pipe(tap((posts) => this.postsState.addPost(posts)))
        .subscribe(
          (post) => {
            this.postsState.addPost(post);
            this.goBack();
          },
          (error) => console.log(error),
          () => this.postsState.setUpdating(false)
        )
    );
  }

  deletePost(id: number) {
    return (
      this.postsApi
        .deletePost(id)
        .pipe(tap((id) => this.postsState.removePost(id)))
        .subscribe(
          (id) => {
            this.postsState.removePost(id);
            this.goBack();
          },
          (error) => console.log(error),
          () => this.postsState.setUpdating(false)
        )
    );
  }

  goBack(): void {
    this.location.back();
  }

  // пессимистичное обновление
  // 1. вызов API
  // 2. обновить состояние пользовательского интерфейса
  updatePost(post: Post) {
    this.postsState.setUpdating(true);
    this.postsApi.updatePost(post)
      .subscribe(
        () => {
          this.postsState.updatePost(post);
          this.goBack();
        },
        (error) => console.log(error),
        () => this.postsState.setUpdating(false)
      );
  }
}


