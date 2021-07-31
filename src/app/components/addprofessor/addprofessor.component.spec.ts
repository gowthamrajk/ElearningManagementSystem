import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofessorComponent } from './addprofessor.component';

describe('AddprofessorComponent', () => {
  let component: AddprofessorComponent;
  let fixture: ComponentFixture<AddprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
