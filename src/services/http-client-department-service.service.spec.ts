import { TestBed } from '@angular/core/testing';

import { HttpClientDepartmentService } from './http-client-department.service';

describe('HttpClientDepartmentServiceService', () => {
  let service: HttpClientDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
