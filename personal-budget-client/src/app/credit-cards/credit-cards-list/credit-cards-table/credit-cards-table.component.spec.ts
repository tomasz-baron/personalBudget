import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreditCardsTableComponent } from './credit-cards-table.component';

describe('CreditCardsTableComponent', () => {
  let component: CreditCardsTableComponent;
  let fixture: ComponentFixture<CreditCardsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
