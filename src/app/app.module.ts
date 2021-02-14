import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { PostWithCommentsModule } from './postWithComments/post-with-comments.module';
import { PostsModule } from './posts/posts.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PostsModule,
    PostWithCommentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
