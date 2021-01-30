import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewTransactionsComponent } from './new-transactions.component';

describe('EditTransactionsComponent', () => {
  let component: NewTransactionsComponent;
  let fixture: ComponentFixture<NewTransactionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
