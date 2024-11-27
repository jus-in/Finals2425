import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { id: 1, name: 'Web Development', category: 'IT' },
    { id: 2, name: 'Graphic Design', category: 'Creative' },
    { id: 3, name: 'Consulting', category: 'Business' },
  ];

  viewService(id: number) {
    console.log('View Service:', id);
  }

  editService(id: number) {
    console.log('Edit Service:', id);
  }

  deleteService(id: number) {
    console.log('Delete Service:', id);
  }
}
