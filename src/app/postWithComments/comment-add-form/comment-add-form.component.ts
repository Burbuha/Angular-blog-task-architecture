import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.css'],
})
export class CommentAddFormComponent {
  @Output() onClickAddComment = new EventEmitter();
  @ViewChild('body') inputBody!: ElementRef;
  @ViewChild('name') inputName!: ElementRef;

  constructor() {}

  addNewComment(value: string[]) {
    this.onClickAddComment.emit(value);
    this.inputBody.nativeElement.value = '';
    this.inputName.nativeElement.value = '';
  }
}
