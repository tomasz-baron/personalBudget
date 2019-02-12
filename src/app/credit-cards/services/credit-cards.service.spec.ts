import { TestBed } from '@angular/core/testing';

import { CreditCardsService } from './credit-cards.service';

describe('CreditCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditCardsService = TestBed.get(CreditCardsService);
    expect(service).toBeTruthy();
  });
});
