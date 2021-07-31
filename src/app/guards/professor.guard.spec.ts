import { TestBed } from '@angular/core/testing';

import { ProfessorGuard } from './professor.guard';

describe('ProfessorGuard', () => {
  let guard: ProfessorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfessorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
