import { TestBed } from '@angular/core/testing';

import { RouterGuard } from './router.guard';

describe('RouterGuard', () => {
  let guard: RouterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
