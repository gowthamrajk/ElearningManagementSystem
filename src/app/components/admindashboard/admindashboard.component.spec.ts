import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardComponent } from './admindashboard.component';

describe('AdmindashboardComponent', () => {
  let component: AdmindashboardComponent;
  let fixture: ComponentFixture<AdmindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
