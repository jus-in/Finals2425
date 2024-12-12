import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  successMessage: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  // Method to handle form submission
  onSubmit(registrationForm: NgForm): void {
    if (registrationForm.valid) {
      // Handle successful registration (e.g., call an API or service)
      // For now, we'll simulate success
      this.successMessage = 'Registration Successful! You can now log in.';
      
      // Optionally, reset the form
      registrationForm.reset();
      
      // Hide success message after a few seconds
      setTimeout(() => {
        this.successMessage = null;
      }, 5000); // Message disappears after 5 seconds
    }
  }

  passwordMismatch(form: NgForm): boolean {
    const password = form.controls['password']?.value;
    const confirmPassword = form.controls['confirmPassword']?.value;
    return password !== confirmPassword;
  }
}
