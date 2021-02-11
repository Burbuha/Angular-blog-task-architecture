import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PostsComponent } from "./posts-container/posts.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { PostPreviewComponent } from "./post-preview/post-preview.component";
import { HttpClientModule } from '@angular/common/http';
import { PostsApiService } from './posts-api.service';
import { PostsFacadeService } from './posts-facade.service';
import { PostsState } from './posts.state.service';

@NgModule({
  declarations: [PostsComponent, CreatePostComponent, PostPreviewComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [PostsApiService, PostsFacadeService, PostsState],
  exports: [PostsComponent, CreatePostComponent, PostPreviewComponent],
})
export class PostsModule { }
