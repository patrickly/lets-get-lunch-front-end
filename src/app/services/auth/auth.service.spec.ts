import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
  let authService: AuthService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    authService = TestBed.get(AuthService);
    http = TestBed.get(HttpTestingController);
  });
  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});