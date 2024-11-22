import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      alert('Registration successful!');
    } else {
      alert('Please fix the errors and try again.');
    }
  }
}
