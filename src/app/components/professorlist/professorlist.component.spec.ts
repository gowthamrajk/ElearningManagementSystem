import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorlistComponent } from './professorlist.component';

describe('ProfessorlistComponent', () => {
  let component: ProfessorlistComponent;
  let fixture: ComponentFixture<ProfessorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
