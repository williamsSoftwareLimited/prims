import { TestBed } from '@angular/core/testing';

import { PrimsService } from './prims.service';

describe('PrimsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimsService = TestBed.get(PrimsService);
    expect(service).toBeTruthy();
  });
});
