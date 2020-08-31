import { TestBed } from '@angular/core/testing';

import { MysvcService } from './mysvc.service';

describe('MysvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MysvcService = TestBed.get(MysvcService);
    expect(service).toBeTruthy();
  });
});
