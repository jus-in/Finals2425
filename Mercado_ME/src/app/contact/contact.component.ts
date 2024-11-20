import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  submittedMessages: { name: string; email: string; message: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const newMessage = this.contactForm.value;
      this.submittedMessages.push(newMessage); // Add the submitted message to the array
      this.contactForm.reset();
      alert('Message submitted successfully!');
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
