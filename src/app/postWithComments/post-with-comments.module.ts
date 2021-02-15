import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './../app-routing.module';

import { PostsState } from '../shared/posts.state.service';
import { CommentsFacadeService } from './comments-facade.service';
import { CommentsStateService } from './comments-state.service';
import { CommentsApiService } from './comments-api.service';

import { CommentAddFormComponent } from './comment-add-form/comment-add-form.component';
import { PostEditComponent } from './post-edit-form/post-edit-form.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { PostDetailComponent } from './post-container/post-detail.component';
import { PostsApiService } from '../shared/posts-api.service';
import { PostsFacadeService } from '../shared/posts-facade.service';
// import { LazyLoadedRoutingModule } from "./lazy-loaded-routing.module";
// import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    PostDetailComponent,
    CommentsComponent,
    PostComponent,
    PostEditComponent,
    CommentAddFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // CommonModule,
    // LazyLoadedRoutingModule,
  ],
  providers: [
    PostsApiService,
    PostsFacadeService,
    PostsState,
    CommentsFacadeService,
    CommentsStateService,
    CommentsApiService,
  ],
})
export class PostWithCommentsModule {}
