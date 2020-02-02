import { TestBed } from '@angular/core/testing';

import { AirainServiceService } from './airain-service.service';

describe('AirainServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirainServiceService = TestBed.get(AirainServiceService);
    expect(service).toBeTruthy();
  });
});
