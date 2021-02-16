import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './postWithComments/post-container/post-detail.component';
import { PostsComponent } from './posts/posts-container/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  // {
  //   path: 'lazy-loaded',
  //   loadChildren: () =>
  //     import('./postWithComments/post-with-comments.module').then(
  //       (m) => m.PostWithCommentsModule
  //     ),
  // },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
