import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchapterComponent } from './addchapter.component';

describe('AddchapterComponent', () => {
  let component: AddchapterComponent;
  let fixture: ComponentFixture<AddchapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddchapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
