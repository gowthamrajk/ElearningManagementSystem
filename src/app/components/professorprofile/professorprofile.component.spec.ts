import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorprofileComponent } from './professorprofile.component';

describe('ProfessorprofileComponent', () => {
  let component: ProfessorprofileComponent;
  let fixture: ComponentFixture<ProfessorprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
