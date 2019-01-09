import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupModule } from './signup.module';
import { SignupComponent } from './signup.component';
import { AuthService } from '../services/auth/auth.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

class SignupPage {
  submitBtn: DebugElement;
  usernameInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
  dietPreference: DebugElement[];
  addPageElements() {
    this.submitBtn = fixture.debugElement.query(By.css('button'));
    this.usernameInput = fixture
      .debugElement
      .query(By.css('[name=username]'))
      .nativeElement;
    this.passwordInput = fixture
      .debugElement
      .query(By.css('[name=password]'))
      .nativeElement;
    this.dietPreference = fixture
      .debugElement
      .queryAll(By.css('[name=preference]'));
  }
}


class MockAuthService {
  signup(credentials) { }
}

let component: SignupComponent;
let fixture: ComponentFixture<SignupComponent>;
let signupPage: SignupPage;
let authService: AuthService;

describe('SignupComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SignupModule]
    })
      .overrideComponent(SignupComponent, {
        set: {
          providers: [
            { provide: AuthService, useClass: MockAuthService }
          ]
        }
      }).compileComponents();
  }));

  beforeEach(async(() => { // Add async here!
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    signupPage = new SignupPage();
    authService = fixture.debugElement.injector.get(AuthService);

    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      fixture.detectChanges();
      signupPage.addPageElements();
    });
  })); // Add another paren here to close the async call

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
