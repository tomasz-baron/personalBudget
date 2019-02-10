import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransactionsComponent } from './edit-transactions.component';

describe('EditTransactionsComponent', () => {
  let component: EditTransactionsComponent;
  let fixture: ComponentFixture<EditTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
