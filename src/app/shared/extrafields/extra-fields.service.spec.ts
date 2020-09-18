import { TestBed } from '@angular/core/testing';

import { ExtraFieldsService } from './extra-fields.service';

describe('ExtraFieldsService', () => {
  let service: ExtraFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
