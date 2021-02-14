import { TestBed } from '@angular/core/testing';

import { CommentsApiService } from './comments-api.service';

describe('CommentApiService', () => {
  let service: CommentsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
