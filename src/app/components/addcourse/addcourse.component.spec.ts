import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourseComponent } from './addcourse.component';

describe('AddcourseComponent', () => {
  let component: AddcourseComponent;
  let fixture: ComponentFixture<AddcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
