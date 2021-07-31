import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcourseComponent } from './fullcourse.component';

describe('FullcourseComponent', () => {
  let component: FullcourseComponent;
  let fixture: ComponentFixture<FullcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
