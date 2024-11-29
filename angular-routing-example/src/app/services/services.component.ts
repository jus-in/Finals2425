import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { id: 1, name: 'Event Photography & Videography', category: 'Event' },
    { id: 2, name: 'Commercial Photography & Cinematography', category: 'Commercial' },
    { id: 3, name: 'Film Production', category: 'Film/Media' },
    { id: 4, name: 'Portrait Photography', category: 'Portrait' },
    { id: 5, name: 'Drone Cinematography & Photography', category: 'Aerial' },
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
