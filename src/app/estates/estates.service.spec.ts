import { TestBed } from '@angular/core/testing';

import { EstatesService } from './estates.service';

describe('EstatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstatesService = TestBed.get(EstatesService);
    expect(service).toBeTruthy();
  });
});
