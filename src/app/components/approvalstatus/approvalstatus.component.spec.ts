import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalstatusComponent } from './approvalstatus.component';

describe('ApprovalstatusComponent', () => {
  let component: ApprovalstatusComponent;
  let fixture: ComponentFixture<ApprovalstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
