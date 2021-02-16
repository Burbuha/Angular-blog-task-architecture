import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PostsComponent } from './posts-container/posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostsComponent, CreatePostComponent, PostPreviewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule, NgbModule],
  providers: [],
})
export class PostsModule { }
