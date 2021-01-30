import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreditCardsListComponent } from './credit-cards-list.component';

describe('CreditCardsListComponent', () => {
  let component: CreditCardsListComponent;
  let fixture: ComponentFixture<CreditCardsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
