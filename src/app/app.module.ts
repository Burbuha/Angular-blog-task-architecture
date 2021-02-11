import { PostService } from './post.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './postWithComments/post-container/post-detail.component';
import { CommentsComponent } from './postWithComments/comments/comments.component';
import { PostComponent } from './postWithComments/post/post.component';
import { PostEditComponent } from './postWithComments/post-edit-form/post-edit-form.component';
import { CommentAddFormComponent } from './postWithComments/comment-add-form/comment-add-form.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    CommentsComponent,
    PostComponent,
    PostEditComponent,
    CommentAddFormComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, PostsModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule { }
