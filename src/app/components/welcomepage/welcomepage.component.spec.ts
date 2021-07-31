import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomepageComponent } from './welcomepage.component';

describe('WelcomepageComponent', () => {
  let component: WelcomepageComponent;
  let fixture: ComponentFixture<WelcomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
