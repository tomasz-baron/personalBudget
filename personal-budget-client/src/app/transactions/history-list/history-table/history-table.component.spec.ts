import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HistoryTableComponent } from './history-table.component';

describe('HistoryTableComponent', () => {
  let component: HistoryTableComponent;
  let fixture: ComponentFixture<HistoryTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
