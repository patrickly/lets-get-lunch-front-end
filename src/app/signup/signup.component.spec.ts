import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupModule } from './signup.module';
import { SignupComponent } from './signup.component';
import { AuthService } from '../services/auth/auth.service';

class MockAuthService {
  signup(credentials) { }
}

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SignupModule]
    })
      // .compileComponents(); // Remove
      .overrideComponent(SignupComponent, {
        set: {
          providers: [
            { provide: AuthService, useClass: MockAuthService }
          ]
        }
      }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
