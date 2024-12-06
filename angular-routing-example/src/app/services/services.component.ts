import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      name: 'Event Photography & Videography',
      description: 'Capture your events with stunning photography and cinematic videography tailored for all occasions.',
      price: 5000
    },
    {
      id: 2,
      name: 'Commercial Photography & Cinematography',
      description: 'High-quality visuals for commercials, advertisements, and product showcases.',
      price: 8000
    },
    {
      id: 3,
      name: 'Film Production',
      description: 'Professional film production services for short films, documentaries, and feature films.',
      price: 15000
    },
    {
      id: 4,
      name: 'Portrait Photography',
      description: 'Creative and personalized portrait sessions that bring out the best in you.',
      price: 3000
    },
    {
      id: 5,
      name: 'Drone Cinematography & Photography',
      description: 'Aerial photography and videography using cutting-edge drone technology.',
      price: 6000
    }
  ];

  viewService(id: number) {
    const service = this.services.find(service => service.id === id);
    if (service) {
      alert(
        `Viewing Service:\nName: ${service.name}\nDescription: ${service.description}\nPrice: $${service.price}`
      );
    }
  }

  editService(id: number) {
    const service = this.services.find(service => service.id === id);
    if (service) {
      const newName = prompt(`Edit Service Name for ${service.name}:`, service.name);
      const newDescription = prompt(`Edit Description for ${service.name}:`, service.description);
      const newPrice = prompt(`Edit Price for ${service.name}:`, service.price.toString());

      if (newName && newDescription && newPrice) {
        service.name = newName;
        service.description = newDescription;
        service.price = parseFloat(newPrice);
        alert('Service updated successfully!');
      }
    }
  }

  deleteService(id: number) {
    const confirmed = confirm('Are you sure you want to delete this service?');
    if (confirmed) {
      this.services = this.services.filter(service => service.id !== id);
      alert('Service deleted successfully!');
    }
  }
}

