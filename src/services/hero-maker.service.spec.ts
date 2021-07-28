import { TestBed } from '@angular/core/testing';

import { HeroMakerService } from './hero-maker.service';

describe('HeroMakerService', () => {
  let service: HeroMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
