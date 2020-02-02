import { TestBed } from '@angular/core/testing';

import { TypeproduitService } from './typeproduit.service';

describe('TypeproduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeproduitService = TestBed.get(TypeproduitService);
    expect(service).toBeTruthy();
  });
});
