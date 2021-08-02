import { TestBed } from '@angular/core/testing';

import { HttpClientRegionService } from './http-client-region.service';

describe('HttpClientRegionService', () => {
  let service: HttpClientRegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientRegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
