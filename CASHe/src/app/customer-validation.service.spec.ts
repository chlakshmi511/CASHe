import { TestBed } from '@angular/core/testing';

import { CustomerValidationService } from './customer-validation.service';

describe('CustomerValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerValidationService = TestBed.get(CustomerValidationService);
    expect(service).toBeTruthy();
  });
});
