import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCondidateComponent } from './info-condidate.component';

describe('InfoCondidateComponent', () => {
  let component: InfoCondidateComponent;
  let fixture: ComponentFixture<InfoCondidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCondidateComponent]
    });
    fixture = TestBed.createComponent(InfoCondidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
