import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  @Output() onClickAddPost = new EventEmitter();
  @ViewChild('body') inputBody!: ElementRef;
  @ViewChild('title') inputTitle!: ElementRef;

  constructor() {}

  addNewPost(value: string[]) {
    this.onClickAddPost.emit(value);
    this.inputBody.nativeElement.value = '';
    this.inputTitle.nativeElement.value = '';
  }
}
