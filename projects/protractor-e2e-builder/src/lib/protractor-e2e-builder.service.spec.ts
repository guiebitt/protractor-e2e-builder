import { TestBed } from '@angular/core/testing';

import { ProtractorE2eBuilderService } from './protractor-e2e-builder.service';

describe('ProtractorE2eBuilderService', () => {
  let service: ProtractorE2eBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtractorE2eBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
