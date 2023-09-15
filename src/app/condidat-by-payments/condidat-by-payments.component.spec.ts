import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatByPaymentsComponent } from './condidat-by-payments.component';

describe('CondidatByPaymentsComponent', () => {
  let component: CondidatByPaymentsComponent;
  let fixture: ComponentFixture<CondidatByPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondidatByPaymentsComponent]
    });
    fixture = TestBed.createComponent(CondidatByPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
