import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts-container/posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';

import { PaginationPipe } from './pagination.pipe';

@NgModule({
  declarations: [
    PostsComponent,
    CreatePostComponent,
    PostPreviewComponent,
    PaginationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
  ],
  providers: [],
})
export class PostsModule {}
