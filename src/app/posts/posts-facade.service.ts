import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostsApiService } from './posts-api.service';
import { Injectable } from '@angular/core';
import { PostsState } from './posts.state.service';
import { Post } from 'src/app/models/post';

@Injectable()

export class PostsFacadeService {

  constructor(
    private postsApi: PostsApiService,
    private postsState: PostsState
  ) { }

  isUpdating$(): Observable<any> {
    return this.postsState.isUpdating$();
  }

  getPosts$(): Observable<any> {
    // здесь мы просто передаем состояние без каких-либо проекций
    // может случиться так, что необходимо объединить два или более потоков и вернуть их компонентам
    return this.postsState.getPosts$();
  }

  loadPosts() {
    return this.postsApi.getPosts()
      .pipe(tap(posts => this.postsState.setPosts(posts)));
  }

  addPost(post: Post) {
    return this.postsApi.addPost(post)
      .pipe(tap(posts => this.postsState.addPost(posts)));
  }

  // пессимистичное обновление
  // 1. вызов API
  // 2. обновить состояние пользовательского интерфейса
  updatePost(post: Post) {
    this.postsState.setUpdating(true);
    this.postsApi.updatePost(post)
      .subscribe(
        () => this.postsState.updatePost(post),
        (error) => console.log(error),
        () => this.postsState.setUpdating(false)
      );
  }

  // оптимистичное обновление
  // 1. обновить состояние пользовательского интерфейса
  // 2. вызвать API
  // addCashflowCategory(category: CashflowCategory) {
  //   this.settingsState.addCashflowCategory(category);
  //   this.cashflowCategoryApi.createCashflowCategory(category)
  //     .subscribe(
  //       (addedCategoryWithId: CashflowCategory) => {
  //         // успех обратного вызова - есть идентификатор , генерируемый сервером, давайте обновить состояние
  //         this.settingsState.updateCashflowCategoryId(category, addedCategoryWithId)
  //       },
  //       (error: any) => {
  //         // обратный вызов ошибки - нам нужно откатить состояние
  //         this.settingsState.removeCashflowCategory(category);
  //         console.log(error);
  //       }
  //     );
  // }


}


