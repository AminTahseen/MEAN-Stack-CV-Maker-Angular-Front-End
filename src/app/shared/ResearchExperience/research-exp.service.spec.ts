import { TestBed } from '@angular/core/testing';

import { ResearchExpService } from './research-exp.service';

describe('ResearchExpService', () => {
  let service: ResearchExpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchExpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
