import { TestBed } from '@angular/core/testing';

import { VerticeJsonService } from './vertice-json.service';

describe('VerticeJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerticeJsonService = TestBed.get(VerticeJsonService);
    expect(service).toBeTruthy();
  });
});
