import { TestBed } from '@angular/core/testing';

import { EstatehomeService } from './estatehome.service';

describe('EstatehomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstatehomeService = TestBed.get(EstatehomeService);
    expect(service).toBeTruthy();
  });
});
