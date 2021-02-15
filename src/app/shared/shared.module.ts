import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { PostsApiService } from './posts-api.service';
// import { PostsFacadeService } from './posts-facade.service';
// import { PostsState } from './posts.state.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [CommonModule, FormsModule],
  providers: [
    // PostsApiService,
    // PostsFacadeService,
    // PostsState
  ],
})
export class SharedModule {}
