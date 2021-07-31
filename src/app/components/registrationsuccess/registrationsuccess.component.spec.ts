import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsuccessComponent } from './registrationsuccess.component';

describe('RegistrationsuccessComponent', () => {
  let component: RegistrationsuccessComponent;
  let fixture: ComponentFixture<RegistrationsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
