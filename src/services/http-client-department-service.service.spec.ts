import { TestBed } from '@angular/core/testing';

import { HttpClientDepartmentServiceService } from './http-client-department-service.service';

describe('HttpClientDepartmentServiceService', () => {
  let service: HttpClientDepartmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientDepartmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
