import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Logic for login authentication (username and password validation)
    if (this.username && this.password) {
      // Redirect to home or dashboard after successful login
      console.log('Login successful');
      this.router.navigate(['/dashboard']); // Adjust to your desired route
    } else {
      console.log('Please fill in both fields');
    }
  }
}
