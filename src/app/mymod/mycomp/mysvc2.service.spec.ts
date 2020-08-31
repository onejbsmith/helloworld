import { TestBed } from '@angular/core/testing';

import { Mysvc2Service } from './mysvc2.service';

describe('Mysvc2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Mysvc2Service = TestBed.get(Mysvc2Service);
    expect(service).toBeTruthy();
  });
});
