import { TestBed } from '@angular/core/testing';

import { DocsInteractionService } from './docs-interaction.service';

describe('DocsInteractionService', () => {
  let service: DocsInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocsInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
