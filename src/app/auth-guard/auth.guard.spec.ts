import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuard } from './auth.guard';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[MatSnackBarModule,JwtModule]});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
