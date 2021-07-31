import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessordashboardComponent } from './professordashboard.component';

describe('ProfessordashboardComponent', () => {
  let component: ProfessordashboardComponent;
  let fixture: ComponentFixture<ProfessordashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessordashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
