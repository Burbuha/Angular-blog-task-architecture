import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './../app-routing.module';

import { CommentsFacadeService } from './comments-facade.service';
import { CommentsStateService } from './comments-state.service';
import { CommentsApiService } from './comments-api.service';

import { CommentAddFormComponent } from './comment-add-form/comment-add-form.component';
import { PostEditComponent } from './post-edit-form/post-edit-form.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { PostDetailComponent } from './post-container/post-detail.component';
import { SharedModule } from '../shared/shared.module';

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
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    // CommonModule,
    // LazyLoadedRoutingModule,
  ],
  providers: [CommentsFacadeService, CommentsStateService, CommentsApiService],
})
export class PostWithCommentsModule {}
