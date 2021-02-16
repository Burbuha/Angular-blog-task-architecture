import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { PostsState } from './posts.state.service';
import { Post } from 'src/app/shared/models/post';
import { PostsApiService } from './posts-api.service';

@Injectable({
  providedIn: 'root', // <--provides this service in the root ModuleInjector
})
export class PostsFacadeService {
  constructor(
    private postsApi: PostsApiService,
    private postsState: PostsState,
    private location: Location
  ) {}

  isUpdating$(): Observable<boolean> {
    return this.postsState.isUpdating$();
  }

  getPosts$(): Observable<Post[]> {
    // здесь мы просто передаем состояние без каких-либо проекций
    // может случиться так, что необходимо объединить два или более потоков и вернуть их компонентам
    return this.postsState.getPosts$();
  }

  getPost$(): Observable<Post> {
    return this.postsState.getPost();
  }

  loadPosts() {
    return this.postsApi
      .getPosts()
      .pipe(tap((posts) => this.postsState.setPosts(posts)))
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
          },
          (error) => console.log(error),
          () => this.postsState.setUpdating(false)
        )
    );
  }

  deletePost(id: number) {
    this.postsState.removePost(id);
    return this.postsApi
      .deletePost(id)
      .pipe(tap(() => console.log(`Post c id = ${id} deleted`)))
      .subscribe(
        () => {
          this.location.back();
        },
        (error) => console.log(error),
        () => this.postsState.setUpdating(false)
      );
  }

  // пессимистичное обновление
  // 1. вызов API
  // 2. обновить состояние пользовательского интерфейса
  updatePost(post: Post) {
    this.postsState.setUpdating(true);
    this.postsApi.updatePost(post).subscribe(
      () => {
        this.postsState.updatePost(post);
      },
      (error) => console.log(error),
      () => this.postsState.setUpdating(false)
    );
  }
}
