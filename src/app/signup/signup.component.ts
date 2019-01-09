import { Component, OnInit } from '@angular/core';
import { User } from '../services/auth/user';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = { 'username': '', password: '' };
  dietPreferences = [
    { name: 'BBQ', checked: false },
    { name: 'Burger', checked: false },
    { name: 'Chinese', checked: false },
    { name: 'Deli', checked: false },
    { name: 'Fast Food', checked: false },
    { name: 'Italian', checked: false },
    { name: 'Japanese', checked: false },
    { name: 'Mexican', checked: false },
    { name: 'Pizza', checked: false }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  signup(credentials) {
    credentials.dietPreferences = this.getSelectedPreferences();
    //console.log(JSON.stringify(credentials.dietPreferences));
    //console.log("33434#" + JSON.stringify(credentials));

    this.authService.signup(credentials).subscribe(res => {
      console.log('res ', res);
      // Redirect to user dashboard
    });
  }

  getSelectedPreferences() {
    return this.dietPreferences
      .filter((preference) => {
        if (preference.checked === true) { return preference; }
      })
      .map((preference) => {
        return preference.name;
      });
  }

  onPrefCheck(index) {
    if (this.dietPreferences[index].checked === true) {
      this.dietPreferences[index].checked = false;
    } else {
      this.dietPreferences[index].checked = true;
    }
  }
}
