import { TestBed } from '@angular/core/testing';

import { SintaxHighlightingService } from './sintax-highlighting.service';

describe('SintaxHighlightingService', () => {
  let service: SintaxHighlightingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SintaxHighlightingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
