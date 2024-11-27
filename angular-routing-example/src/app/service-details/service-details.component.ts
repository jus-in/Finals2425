import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  serviceDetails = {
    id: '',
    name: '',
    description: '',
    category: '',
    cost: ''
  };

  categories = ['Consulting', 'Repair', 'Installation', 'Training'];

  constructor() {}

  ngOnInit(): void {
    // You can initialize the serviceDetails here or fetch it from an API
    // For example:
    this.serviceDetails = {
      id: 'S001',
      name: 'Basic Consulting',
      description: 'Providing basic consulting services.',
      category: 'Consulting',
      cost: '100'
    };
  }

  onSubmit() {
    // Handle the form submission, e.g., send to API or store in a service
    console.log('Form submitted:', this.serviceDetails);
  }

  onCancel() {
    // Reset the form or navigate to a different page
    console.log('Form cancelled');
  }
}
