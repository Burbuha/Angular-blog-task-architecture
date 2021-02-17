import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/app/shared/models/post';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(posts: Post[], page: number, pageSize: number) {
    return posts.slice((page - 1) * pageSize, page * pageSize);
  }
}
