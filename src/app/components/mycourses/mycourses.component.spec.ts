import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoursesComponent } from './mycourses.component';

describe('MycoursesComponent', () => {
  let component: MycoursesComponent;
  let fixture: ComponentFixture<MycoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
