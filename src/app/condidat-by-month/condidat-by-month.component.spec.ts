import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatByMonthComponent } from './condidat-by-month.component';

describe('CondidatByMonthComponent', () => {
  let component: CondidatByMonthComponent;
  let fixture: ComponentFixture<CondidatByMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondidatByMonthComponent]
    });
    fixture = TestBed.createComponent(CondidatByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
