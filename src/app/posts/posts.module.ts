import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts-container/posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsState } from '../shared/posts.state.service';
import { PostsApiService } from '../shared/posts-api.service';
import { PostsFacadeService } from '../shared/posts-facade.service';

@NgModule({
  declarations: [PostsComponent, CreatePostComponent, PostPreviewComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [PostsApiService, PostsFacadeService, PostsState],
})
export class PostsModule {}
