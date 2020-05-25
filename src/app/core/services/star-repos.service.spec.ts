import { TestBed } from '@angular/core/testing';

import { StarReposService } from './star-repos.service';

describe('StarReposService', () => {
  let service: StarReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
